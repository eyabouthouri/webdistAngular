import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './frontoffice/projet/projet.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth-guard.guard';
import { HomeComponent } from './frontoffice/home/home.component';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: 'backoffice',canActivate: [AuthGuard], loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) },
  { path: 'frontoffice',canActivate: [AuthGuard], loadChildren: () => import('./frontoffice/frontoffice.module').then(m => m.FrontofficeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
