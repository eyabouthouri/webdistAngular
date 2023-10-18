import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReponsesComponent } from './reponses.component';
import { AddReponseComponent } from './add-reponse/add-reponse.component';

const routes: Routes = [{ path: '', component: ReponsesComponent },
{ path: 'addreponse/:id', component: AddReponseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReponsesRoutingModule { }
