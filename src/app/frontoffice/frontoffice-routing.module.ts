
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { ShowReponseComponent } from './show-reponse/show-reponse.component';
import { ProfileComponent } from './profile/profile.component';
import { RecruterComponent } from './recruter/recruter.component';
const routes: Routes = [{ path: '', component: FrontofficeComponent },{path:'formation',component:FormationComponent},{path:'events',component:EventsComponent},{path:'home',component:HomeComponent},{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},
{ path: 'projet', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
  { path: 'condid', loadChildren: () => import('./condidature/condidature.module').then(m => m.CondidatureModule) },
  { path:'showreponse/:id',component:ShowReponseComponent},
  { path:'profile',component:ProfileComponent},
  { path:'recruter',component:RecruterComponent},
{ path: 'reclamations', loadChildren: () => import('./reclamations/reclamations.module').then(m => m.ReclamationsModule) },
{ path: 'blogs', loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule) }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
