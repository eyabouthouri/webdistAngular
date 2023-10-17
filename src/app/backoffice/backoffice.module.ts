import { NgModule } from '@angular/core';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { HeaderbackComponent } from './headerback/headerback.component';
import { FooterbackComponent } from './footerback/footerback.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjetbackComponent } from './projetback/projetback.component';
import { CondidaturebackComponent } from './condidatureback/condidatureback.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    FormationAdminComponent,
    ProjetbackComponent,
    CondidaturebackComponent


  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,FormsModule,HttpClientModule,
  ]
})
export class BackofficeModule { }
