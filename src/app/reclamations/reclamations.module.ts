import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ReclamationsComponent } from './reclamations.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from '../date-format.pipe';


@NgModule({
  declarations: [
    ReclamationsComponent,
    AddReclamationComponent,
    ListReclamationsComponent,
    DateFormatPipe,
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule,
    FormsModule,
  ]
})
export class ReclamationsModule { }
