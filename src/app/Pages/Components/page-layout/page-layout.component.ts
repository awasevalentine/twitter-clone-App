import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../Cores/Services/auth.service';
import { Router } from '@angular/router';
import { TweetsDataService } from '../../Cores/Services/tweets-data.service';
import { CreateUSerTweet } from '../../Cores/Interfaces/user-Tweet.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tweets } from '../../Cores/Interfaces/tweets.interface';
import { TemplateRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {
  @ViewChild("tweetModal") tweetModal: TemplateRef<any>;
  tweetDialog: MatDialogRef<any>;
  public tweets: Tweets[] = [];

  public user = this.authService;
  tweetMsg: string;
  tweet: CreateUSerTweet;
  twit_Id;
  commentMsg: '';
  userEmail:'';


  constructor(private authService: AuthService,
    private router: Router,
    private _tweetService: TweetsDataService,
    private _snackbar: MatSnackBar, private _dialog: MatDialog) {

   }

  ngOnInit(): void {

   /* if(this.authService.isLoggedIn){
      this.router.navigateByUrl('/dashboard/home');
      } else {
        this.router.navigateByUrl('/user-login');

  }*/

}

  Tweet(){

    this.showMiodal();
  }

  showMiodal() {
    this.tweetDialog = this._dialog.open(this.tweetModal, {
      disableClose: false
    });
}

  createTweet() {
    console.log(`data sent to server -> `, this.tweet);
  this.tweet = {content: this.tweetMsg, userId: this.authService.getUserDetails().email }
  this._tweetService.postTweet(this.tweet).subscribe(
    (data) => {
      this.tweetMsg = '';
      if(data){
        this.getALlTweets();
        this._snackbar.open(`${this.tweet.content} posted`, 'Ok', {verticalPosition: 'bottom', horizontalPosition: 'right'});
      }
    },
    (error) => {}
  )
    }

getALlTweets(){
   
  this._tweetService.getTweets().subscribe(
    (data) => {
      this.tweets = data && data.length > 1 ? data.reverse(): [];
      console.log(`this are the tweets `, data);
    },
    (err) => {
      throw new ErrorEvent(`could not fetch datas`, err);
    }
  )
}


login() {
  this.authService.userLogin();
  if(!this.authService.isLoggedIn()){
    console.log(`user successfully logged out`);
  }
}


logout(): boolean {
  this.authService.logOut();
  return false;
  }


}
