import {catchError, retry} from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenPayload } from '../Interfaces/tokenPayload.interface';
import { UserDetails } from '../Interfaces/userDetails.interface';
import { TweetsDataService } from './tweets-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: any;
  

  private baseUrl = 'https://ng-twitter-app.herokuapp.com';
  //private baseUrl = 'http://localhost:3000';

  constructor( private http: HttpClient, private router: Router) {

  

  }

  public signUp (user: TokenPayload): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/users/signup`, user);
  }


  public login(user): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/auth/signin`, user);
  }


  public saveGeneratedToken(token: string): void {
    localStorage.setItem('mean-token', token);
    // this.token = token;
  }

  public getToken(): string {
    this.token = localStorage.getItem('mean-token');
    return this.token;
  }

  public getUserDetails(): UserDetails{
    const token = this.getToken();
    let payload;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }


  getUser(): any {
    const user = this.getUserDetails();
    if (user) {
      return user.email.split("@")[0];
    } else {
      return null;
    }
    }

  public getUserProfile(): Observable<any>{
    let header = new HttpHeaders({
      'Content-Type': 'application/json; text/html; image/jpeg'
    });
    const getImagePath = this.getUserDetails().imagePath;
    return this.http.get<any>(`${this.baseUrl}/api/users/${getImagePath}`, { responseType: 'blob' as 'json', headers: header });
    }



  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  public logOut(): void {
    localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/user-login');
  }


  userLogin() {
    this.router.navigateByUrl('/user-login');
}
}
