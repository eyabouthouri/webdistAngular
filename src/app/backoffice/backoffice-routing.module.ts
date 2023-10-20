import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { AadFormationComponent } from './aad-formation/aad-formation.component';

const routes: Routes = [{ path: '', component: BackofficeComponent },{path:'back',component:FormationAdminComponent},{path:'addformation',component:AadFormationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
