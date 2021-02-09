import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Observable } from 'rxjs';



@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  private screenWidth$ = new BehaviorSubject<number> (window.innerWidth);
 
  sideBarOpen: boolean = true;
  

  constructor() { }

  ngOnInit(): void {
    this.getScreenWidth().subscribe(width => {
      if (width < 640) {
       this.sideBarOpen = false;
     }
     else if (width > 640) {
       this.sideBarOpen = true;
     }
   });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth$.next(event.target.innerWidth);
  }
  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }


  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
