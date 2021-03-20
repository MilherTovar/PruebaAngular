import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:'./dashboard/dashboard.module#DashboardModule'
  },
  {
    path:'',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
