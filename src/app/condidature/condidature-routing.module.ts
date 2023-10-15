import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondidatureComponent } from './condidature.component';
import { AddCondidatureComponent } from './add-condidature/add-condidature.component';

const routes: Routes = [{ path: '', component: CondidatureComponent , children:[
  {path:'addcondid/:id', component:AddCondidatureComponent},

] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondidatureRoutingModule { }
