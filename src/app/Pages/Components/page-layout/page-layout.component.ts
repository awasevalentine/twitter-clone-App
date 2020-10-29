import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Cores/Services/auth.service';
import { Router } from '@angular/router';
import { TweetsDataService } from '../../Cores/Services/tweets-data.service';
import { CreateUSerTweet } from '../../Cores/Interfaces/user-Tweet.interface';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {

  public user = this.authService;
  tweetMsg: string;
  tweet: CreateUSerTweet;

  constructor(private authService: AuthService, private router: Router, private _tweetService: TweetsDataService) {

   }

  ngOnInit(): void {

   /* if(this.authService.isLoggedIn){
      this.router.navigateByUrl('/dashboard/home');
      } else {
        this.router.navigateByUrl('/user-login');

  }*/

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
