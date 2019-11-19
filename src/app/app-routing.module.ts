import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/admins/log-in/log-in.component';
import { RegisterComponent } from './components/admins/register/register.component';
import { HomeComponent } from './components/admins/home/home.component';
import { TravelComponent } from './components/admins/travel/travel.component';


const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'home-admins', component: HomeComponent}, ///:id_admin
  {path: 'travel', component: TravelComponent}, 
];

export const routing = RouterModule.forRoot(routes);
