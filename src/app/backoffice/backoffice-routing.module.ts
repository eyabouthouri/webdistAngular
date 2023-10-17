import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { ProjetbackComponent } from './projetback/projetback.component';
import { CondidaturebackComponent } from './condidatureback/condidatureback.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },{path:'back',component:FormationAdminComponent},
{ path: 'projetback', component:ProjetbackComponent },
{ path: 'condidtback/:id', component:CondidaturebackComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
