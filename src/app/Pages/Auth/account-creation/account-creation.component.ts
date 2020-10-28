import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {
  regForm: FormGroup;

  constructor(private _snackbar: MatSnackBar, private router: Router) {
    this.regForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      passwordHash: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
   }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.regForm.value)
      .subscribe(() => {
        console.log(`from inside `, this.regForm.value);
        this._snackbar.open('Your account was successfully created ', 'Ok', {horizontalPosition: 'right', verticalPosition: 'bottom'});
       this.router.navigateByUrl('/user-login');
    }, (err) => {
       console.error(err);
  });
}

}
