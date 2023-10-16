import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { DateFormatPipe } from './date-format.pipe';


@NgModule({
  declarations: [
    SharedComponent,
    DateFormatPipe
  ],
  exports: [SharedComponent,DateFormatPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
