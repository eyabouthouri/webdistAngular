import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { HeaderbackComponent } from './headerback/headerback.component';
import { FooterbackComponent } from './footerback/footerback.component';
import { ReclamationsAdminComponent } from './reclamations-admin/reclamations-admin.component';
import { SharedModule } from '../shared/shared.module';
import { ReclamationsNonTraiteesComponent } from './reclamations-non-traitees/reclamations-non-traitees.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BackofficeComponent,
    FormationAdminComponent,
    ReclamationsAdminComponent,
    ReclamationsNonTraiteesComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,SharedModule, FormsModule,HttpClientModule
  ]
})
export class BackofficeModule { }
