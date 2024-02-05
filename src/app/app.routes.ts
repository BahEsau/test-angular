import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'profile', component: EditPageComponent },
  { path: 'landing', component: LandingPageComponent },
];

