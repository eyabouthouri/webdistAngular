import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { ReclamationsNonTraiteesComponent } from './reclamations-non-traitees/reclamations-non-traitees.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },
{path:'back',component:FormationAdminComponent},
{path:'adminrec',component:ReclamationsAdminComponent},
{path: 'reponses', loadChildren: () => import('./reponses/reponses.module').then(m => m.ReponsesModule) },
{path:'nontraitees',component:ReclamationsNonTraiteesComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
