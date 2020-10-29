import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../Cores/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  token: '';

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private _snackbar: MatSnackBar) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),

      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe((data) => {

        this.authService.saveGeneratedToken(data.accessToken);
        this.token = data.accessToken;
        this.router.navigateByUrl('/dashboard');
        this._snackbar.open('User successfully logged in', 'Ok', { horizontalPosition: 'right', verticalPosition: 'bottom' });

        return;
      }, (err) => {
          console.error(err);
          alert(err);
      });

  }

}
