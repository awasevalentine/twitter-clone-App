import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Pages/MaterialModule/angular-material/angular-material.module';
import { AccountCreationComponent } from './Pages/Auth/account-creation/account-creation.component';
import { UserLoginComponent } from './Pages/Auth/user-login/user-login.component';
import { DashboardComponent } from './Pages/Components/dashboard/dashboard.component';
import { PageLayoutComponent } from './Pages/Components/page-layout/page-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountCreationComponent,
    UserLoginComponent,
    DashboardComponent,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
