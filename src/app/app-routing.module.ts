import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from './Pages/Components/page-layout/page-layout.component';
import { HomePageComponent } from './Pages/Components/home-page/home-page.component';

const routes: Routes = [
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
