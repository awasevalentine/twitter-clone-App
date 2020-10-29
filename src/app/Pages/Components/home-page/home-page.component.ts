import { Component, OnInit } from '@angular/core';
import { Tweets } from '../../Cores/Interfaces/tweets.interface';
import { TweetsDataService } from '../../Cores/Services/tweets-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public tweets: Array<Tweets> = [];

  constructor(private _tweetService: TweetsDataService) { }

  ngOnInit(): void {
    this.getALlTweets();

  }


  getALlTweets(){
    this._tweetService.getTweets().subscribe(
      (data) => {
        this.tweets = data;
        console.log(`this are the tweets `, data);
      },
      (err) => {
        throw new ErrorEvent(`could not fetch datas`, err);
      }
    )
  }

}
