import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tweets } from 'src/app/Core/Interfaces/tweets.interface';
import { CreateUSerTweet } from 'src/app/Core/Interfaces/user-Tweet.interface';
import { MessageBox } from 'src/app/Core/message/snack-bar.message';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { TweetsDataService } from 'src/app/Core/Services/tweets-data.service';
@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  @ViewChild('commentTemplateModal') commentTemplateModal: TemplateRef<any>; // template reference for the update modal
  commentModal: MatDialogRef<any>;
  public tweets: Tweets[] = [];
  public userImage;
  public userImageFromTweet;
  userImageStatus: boolean;

  loggedInUserId: string = '';
  myloader: boolean;


  tweetMsg: string;
  tweet: CreateUSerTweet;
  twit_Id;
  commentMsg: '';
  userEmail:'';



  public user = this._authService;

  constructor(private _tweetService: TweetsDataService, private _authService: AuthService, private _dialog: MatDialog,
              private _snackbar: MatSnackBar, private _snackbarMessage: MessageBox) {
                this.loggedInUserId = this._authService.getUserDetails().email;
              }

  ngOnInit(): void {
    this.getImageFromService();
    this.getALlTweets();

  }

  //method for getting logged in user image

  createImageFromBlob(image: Blob){
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.userImage = reader.result;
    }, false);
    if(image) {
      reader.readAsDataURL(image);
    }
    return 
  }

  getImageFromService() {
    this._tweetService.getImageFromTwit().subscribe(
      data => {
        this.createImageFromBlob(data);
        if (data) {
          //this.userImageStatus = true;
        }
      },
      error => {
        //this._snackbarMessage.snackBarMessage(error.message);
      }
    );

    this._authService.getUserProfile().subscribe(
      data => {
        this.createImageFromBlob(data);
        if(data) {
          this.userImageStatus = true;
        }
      },

      error => {
        this._snackbarMessage.snackBarMessage(error.message);
      }
    )
  }


  postTweet(tweetForm: NgForm){
    this.tweet = {content: this.tweetMsg, userId: this._authService.getUserDetails().email }
    this._tweetService.postTweet(this.tweet).subscribe(
      (data) => {
        this.tweetMsg = '';
        if(data){
          this.getALlTweets();
          this._snackbar.open(`${this.tweet.content} posted`, 'Ok', {verticalPosition: 'bottom', horizontalPosition: 'right'});
        }
      },
      (error) => {}
    );
    tweetForm.reset();
  }


  getALlTweets(){
   
    this._tweetService.getTweets().subscribe(
      (data) => {
        console.log(`tweet data`, data);
        if(data){
          this.myloader = true;
        }
        this.tweets = data && data.length > 1 ? data.reverse(): [];
        
        this.myloader = false;
      },
      (err) => {
        throw new ErrorEvent(`could not fetch datas`, err);
      }
    )
  }


  likeButton(tweet: Tweets): void {
    let twitId = tweet.twit_Id;
    let userId = tweet.user_Id;
    const isFirstLike = !tweet['f-liked'];
    tweet['liked'] = !tweet['liked'];
    tweet.likes_Count = tweet['liked'] ? tweet.likes_Count + 1: tweet.likes_Count - 1;
    if(isFirstLike){
      this._tweetService.addLike(twitId, userId ).subscribe(
        (response) => {
          tweet['f-liked'] = true;
        }
      )
    }
  }

  getComments(){
    this._tweetService.getTweets().subscribe(
      (res) => {

        //this._tweetService.getTweetCommentsByTwitId()
      }
    );
    //this._tweetService.getTweetCommentsByTwitId(this._tweetService.getTweets().
  }

  commentButton(tweet: Tweets){

    this.twit_Id = tweet.twit_Id;
    this.showEditTodoDialog();

  }

  deleteButton(tweet: Tweets){
    this._snackbar.open('Are you sure you want to remove this twit?','Yes, delete', {duration:5000})
      .onAction().subscribe(
        () => {
          this.deleteTwit(tweet);
        },
        (err) => {}
      );
  }

  deleteTwit(twit: Tweets) {
    this._tweetService.deleteTweetByUserAndTweetId(twit.twit_Id,twit.user_Id).subscribe(
      (response) => {
        this._snackbar.open(`Successfully removed twit`, 'Ok', {horizontalPosition: 'right', verticalPosition: 'bottom', duration: 2000});
        this.getALlTweets();
      },
      (err) => {
        this._snackbar.open(`Failed to remove twit`, 'Ok', {horizontalPosition: 'right', verticalPosition: 'bottom', duration: 1000});
      }
    );
  }
  showEditTodoDialog() {
    this.commentModal = this._dialog.open(this.commentTemplateModal, {
       disableClose:false
    });
  }

  // method for saving the updated todo
  postComment(tweetForm: NgForm) {
    let comments ={message: this.commentMsg, twitId: this.twit_Id, userId: this._authService.getUserDetails().email}

    this._tweetService.addCommentOnTweet(this.twit_Id,comments).subscribe(
      (response) => {
        this.getALlTweets();
        this._snackbar.open(`comment posted`, 'Ok', {verticalPosition: 'bottom', horizontalPosition: 'right'});
        this.commentModal.close();
      },
      (err) => {

      }
    );
    tweetForm.reset();
  }


}
