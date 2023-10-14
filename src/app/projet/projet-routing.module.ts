import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetComponent } from './projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';

const routes: Routes = [{ path: '', component: ProjetComponent , children:[
  {path:'listprojet', component:ListProjetComponent },
  {path:'addprojet', component:AddProjetComponent},

] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }
