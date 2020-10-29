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
import { HomePageComponent } from './Pages/Components/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Pages/Cores/Services/auth.service';
import { TweetsComponent } from './Pages/Components/tweets/tweets.component';
import { LoggedInGuard } from './Pages/Auth/logged-in-guard';


@NgModule({
  declarations: [
    AppComponent,
    AccountCreationComponent,
    UserLoginComponent,
    DashboardComponent,
    PageLayoutComponent,
    HomePageComponent,
    TweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
