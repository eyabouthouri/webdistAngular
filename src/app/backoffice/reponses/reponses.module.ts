import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReponsesRoutingModule } from './reponses-routing.module';
import { AddReponseComponent } from './add-reponse/add-reponse.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AdminReponseComponent } from './admin-reponse/admin-reponse.component';


@NgModule({
  declarations: [
    AddReponseComponent,AdminReponseComponent
  ],
  imports: [
    CommonModule,
    ReponsesRoutingModule,FormsModule,
  ]
})
export class ReponsesModule { }
