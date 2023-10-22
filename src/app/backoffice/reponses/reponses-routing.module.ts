import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReponsesComponent } from './reponses.component';
import { AddReponseComponent } from './add-reponse/add-reponse.component';
import { AdminReponseComponent } from './admin-reponse/admin-reponse.component';

const routes: Routes = [{ path: '', component: ReponsesComponent },
{ path: 'addreponse/:id', component: AddReponseComponent },
{path: 'adminrep/:id', component: AdminReponseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReponsesRoutingModule { }
