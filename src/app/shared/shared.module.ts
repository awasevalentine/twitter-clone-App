import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../MaterialModule/angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DefaultLayoutComponent } from '../Pages/default-layout/default-layout.component';
import { MobileSidebarComponent } from './mobile-sidebar/mobile-sidebar.component';
import { EndSidebarComponent } from './end-sidebar/end-sidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultLayoutComponent,
    MobileSidebarComponent,
    EndSidebarComponent
  
  ],
  
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    
  ],

  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultLayoutComponent,
    MobileSidebarComponent,
    EndSidebarComponent
  ],
  
  providers: []
})
export class SharedModule { }
