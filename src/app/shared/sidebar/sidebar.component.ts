import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { MessageBox } from 'src/app/Core/message/snack-bar.message';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user;
  userImage: any
  public userImageStatus: boolean;
  
  constructor(private authService: AuthService, private _snackbarMessage: MessageBox) { }

  ngOnInit() {
    
    this.getImageFromService();
    this.user = this.authService.getUserDetails();
  }

  

  // reading incoming file from the backend

  createImageFromBlob(image: Blob): Observable<any> {
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
    this.authService.getUserProfile().subscribe(
      data=>{
        this.createImageFromBlob(data);
        if (data) {
          this.userImageStatus = true;
        } 
      },
      error=>{
        this._snackbarMessage.snackBarMessage(error.message);
      }
    )
  }

  /*getUserImageStatus(): Boolean{
    const userImage = this.authService.getUserDetails().imagePath;
    console.log(`here is the image status`, userImage);
    if (userImage !=="NULL") {
      console.log(`instate`, true);
      return true
    }

    console.log(`this will return false`, false);

    return false;
    
  }*/


  Tweet() {
    
  }

  logout() {
    this.authService.logOut();
    
  }

}
