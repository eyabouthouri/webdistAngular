import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { HeaderbackComponent } from './headerback/headerback.component';
import { FooterbackComponent } from './footerback/footerback.component';
import { AadFormationComponent } from './aad-formation/aad-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    FormationAdminComponent,
    AadFormationComponent,
    UpdateFormationComponent,

  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,FormsModule
  ]
})
export class BackofficeModule { }
