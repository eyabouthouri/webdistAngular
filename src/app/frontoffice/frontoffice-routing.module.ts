
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [{ path: '', component: FrontofficeComponent },{path:'formation',component:FormationComponent},{path:'events',component:EventsComponent},{path:'home',component:HomeComponent},
{ path: 'projet', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
  { path: 'condid', loadChildren: () => import('./condidature/condidature.module').then(m => m.CondidatureModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
