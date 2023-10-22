import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { HeaderbackComponent } from './headerback/headerback.component';
import { FooterbackComponent } from './footerback/footerback.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjetbackComponent } from './projetback/projetback.component';
import { CondidaturebackComponent } from './condidatureback/condidatureback.component';
import { AadFormationComponent } from './aad-formation/aad-formation.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    FormationAdminComponent,
    ProjetbackComponent,
    CondidaturebackComponent,

    AadFormationComponent,
    UpdateFormationComponent,

  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,FormsModule,HttpClientModule ,
    BackofficeRoutingModule,FormsModule
  ]
})
export class BackofficeModule { }
