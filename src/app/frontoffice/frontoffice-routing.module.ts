
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontofficeComponent } from './frontoffice.component';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: FrontofficeComponent },{path:'formation',component:FormationComponent},{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
