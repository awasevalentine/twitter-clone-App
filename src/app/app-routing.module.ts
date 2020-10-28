import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from './Pages/Components/page-layout/page-layout.component';
import { HomePageComponent } from './Pages/Components/home-page/home-page.component';
import { DashboardComponent } from './Pages/Components/dashboard/dashboard.component';
import { AccountCreationComponent } from './Pages/Auth/account-creation/account-creation.component';
import { UserLoginComponent } from './Pages/Auth/user-login/user-login.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'user-registration', component: AccountCreationComponent
  },
  {
    path: 'user-login', component: UserLoginComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
  path:"layout", component: PageLayoutComponent
  },
  {
    path: "home", component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
