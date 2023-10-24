
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: FrontofficeComponent },{path:'formation',component:FormationComponent},{path:'home',component:HomeComponent},{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
