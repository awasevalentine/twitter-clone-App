import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public user;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserDetails();
  }

  logout() {
    this.authService.logOut();
    
  }

  Tweet() {
    
  }

}
