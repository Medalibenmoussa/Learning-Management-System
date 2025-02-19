import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddcourseComponent } from './home/addcorse/addcourse.component';
import { authGuard } from './Guards/auth.guard';


export const routes: Routes = [
  {path: '',component: LoginComponent},
  {path: 'home',component: HomeComponent, canActivate: [authGuard], data: { roles: ['admin', 'student'] } },
  {path: 'add',component: AddcourseComponent, canActivate: [authGuard], data: { roles: ['admin', 'trainer'] }},
  { path: '**', redirectTo: '/' }
];
