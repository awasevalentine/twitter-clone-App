import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUSerTweet } from '../Interfaces/user-Tweet.interface';
import { AuthService } from './auth.service';
import { Tweets } from '../Interfaces/tweets.interface';

@Injectable({
  providedIn: 'root'
})
export class TweetsDataService {
  private baseUrl = 'https://ng-twitter-app.herokuapp.com';
  //private baseUrl = 'http://localhost:3000';
  private headers: HttpHeaders;
  constructor(private http: HttpClient, private router: Router, private _authService: AuthService) {
    this.headers = new HttpHeaders().set("Authorization", "Bearer " + this._authService.getToken());
  }


  public postTweet (tweet: CreateUSerTweet): Observable<any> {
    console.log(`posted tweet`, tweet);
    return this.http.post<any>(`${this.baseUrl}/api/twits/create`, tweet, {headers: this.headers});
  }

  public getTweets (): Observable<Tweets[]> {
    return this.http.get<any>(`${this.baseUrl}/api/twits`,  {headers: this.headers});
  }


  public getTweetByUserId(userEmail: string): Observable<any>{
    return this.http.get<any> (`${this.baseUrl}/api/twits/user/${userEmail}`,  {headers: this.headers});
  }

  public getTweetByTweetId(twitId: number): Observable<any>{
    return this.http.get<any> (`${this.baseUrl}/api/twits/${twitId}`,  {headers: this.headers});
  }

  public getTweetCommentsByTwitId(twitId: number): Observable<any>{
    return this.http.get<any> (`${this.baseUrl}/api/twits/${twitId}/comments`,  {headers: this.headers});
  }


  public deleteTweetByUserAndTweetId(twitId: number, userEmail: string): Observable<any> {
    return this.http.delete<any> (`${this.baseUrl}/api/twits/${twitId}/delete/${userEmail}`,  {headers: this.headers});
  }


  public addCommentOnTweet(twitId: number, data : any): Observable<any> {
    return this.http.post<any> (`${this.baseUrl}/api/twits/${twitId}/comments/add`, data,  {headers: this.headers} );
  }

  public addLike(twitId: number, userEmail: string): Observable<any> {
    return this.http.post<any> (`${this.baseUrl}/api/twits/${twitId}/like/${userEmail}`, null,  {headers: this.headers})
  }

}
