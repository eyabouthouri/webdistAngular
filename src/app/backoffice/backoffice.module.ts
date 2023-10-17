import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { HeaderbackComponent } from './headerback/headerback.component';
import { FooterbackComponent } from './footerback/footerback.component';
import { EventsAdminComponent } from './events-admin/events-admin.component';
import { EventsAddComponent } from './events-add/events-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BackofficeComponent,
    FormationAdminComponent,
    EventsAdminComponent,
    EventsAddComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule
  ]
})
export class BackofficeModule { }
