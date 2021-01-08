import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountCreationComponent } from './Pages/Auth/account-creation/account-creation.component';
import { UserLoginComponent } from './Pages/Auth/user-login/user-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TweetsComponent } from './Pages/Components/tweets/tweets.component';
import { LoggedInGuard } from './Pages/Auth/logged-in-guard';
import { AngularMaterialModule } from './MaterialModule/angular-material/angular-material.module';
import { DefaultLayoutComponent } from './Pages/default-layout/default-layout.component';
import { AuthService } from './Core/Services/auth.service';
import { SharedModule } from './shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AccountCreationComponent,
    UserLoginComponent,
    TweetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthService,
    LoggedInGuard,
    {provide: APP_BASE_HREF, useValue: '/'}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
