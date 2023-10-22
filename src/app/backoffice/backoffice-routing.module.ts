import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { EventsAdminComponent } from './events-admin/events-admin.component';
import { EventsAddComponent } from './events-add/events-add.component';
import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ReclamationsNonTraiteesComponent } from './reclamations-non-traitees/reclamations-non-traitees.component';
import { ProjetbackComponent } from './projetback/projetback.component';
import { CondidaturebackComponent } from './condidatureback/condidatureback.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },{path:'back',component:FormationAdminComponent},
{ path: 'projetback', component:ProjetbackComponent },
{ path: 'condidtback/:id', component:CondidaturebackComponent },
{path:'adminevent',component:EventsAdminComponent},
{path:'addevent',component:EventsAddComponent},
{path:'adminrec',component:ReclamationsAdminComponent},
{path: 'reponses', loadChildren: () => import('./reponses/reponses.module').then(m => m.ReponsesModule) },
{path:'nontraitees',component:ReclamationsNonTraiteesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
