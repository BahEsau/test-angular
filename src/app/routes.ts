import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routeConfig: Routes = [
    { path: '', component: LoginComponent , title: 'Login'},
  { path: 'register', component: RegisterComponent , title: 'Register'}, 
  { path: 'profile', component: EditPageComponent , title: 'edit Profile'},
  { path: 'landing', component: LandingPageComponent , title: 'Landing page'},
];
export default routeConfig;