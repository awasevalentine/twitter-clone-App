import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})

export class MessageBox {
  
  constructor(private _snackbar: MatSnackBar){}

  snackBarMessage(message: string) {
    this._snackbar.open(`${message}`, 'ok', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 35000
    });
  }
}