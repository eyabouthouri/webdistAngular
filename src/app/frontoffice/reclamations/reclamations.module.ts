import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ReclamationsComponent } from './reclamations.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReclamationsComponent,
    AddReclamationComponent,
    ListReclamationsComponent,
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
    FormsModule,SharedModule
  ]
})
export class ReclamationsModule { }
