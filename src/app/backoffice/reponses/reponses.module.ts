import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReponsesRoutingModule } from './reponses-routing.module';
import { AddReponseComponent } from './add-reponse/add-reponse.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddReponseComponent
  ],
  imports: [
    CommonModule,
    ReponsesRoutingModule,FormsModule
  ]
})
export class ReponsesModule { }
