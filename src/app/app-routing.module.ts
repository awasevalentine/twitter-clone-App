import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountCreationComponent } from './Pages/Auth/account-creation/account-creation.component';
import { UserLoginComponent } from './Pages/Auth/user-login/user-login.component';
import { TweetsComponent } from './Pages/Components/tweets/tweets.component';
import { LoggedInGuard } from './Pages/Auth/logged-in-guard';
import { DefaultLayoutComponent } from './Pages/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: 'user-registration', component: AccountCreationComponent
  },
  {
    path: 'user-login', component: UserLoginComponent
  },
  {
    path: '', component: DefaultLayoutComponent, canActivate: [ LoggedInGuard ],

    children: [
      {
        path: '', component: TweetsComponent, canActivate: [ LoggedInGuard ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
