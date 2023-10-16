import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CondidaturebackComponent } from './condidatureback.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CondidaturebackComponent
  ],
  imports: [
    CommonModule,HttpClientModule,
    FormsModule,RouterModule
  ]
})
export class CondidaturebackModule { }
