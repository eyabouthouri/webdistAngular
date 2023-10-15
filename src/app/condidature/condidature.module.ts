import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondidatureRoutingModule } from './condidature-routing.module';
import { AddCondidatureComponent } from './add-condidature/add-condidature.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CondidatureComponent } from './condidature.component';


@NgModule({
  declarations: [
    AddCondidatureComponent,
    CondidatureComponent,
  ],
  imports: [
    CommonModule,
    CondidatureRoutingModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule

  ]
})
export class CondidatureModule { }
