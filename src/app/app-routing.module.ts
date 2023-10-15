import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjetComponent } from './projet/list-projet/list-projet.component';

const routes: Routes = [
  { path: 'projet', loadChildren: () => import('./projet/projet.module').then(m => m.ProjetModule) },
  { path: 'condid', loadChildren: () => import('./condidature/condidature.module').then(m => m.CondidatureModule) },


];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
