import { NgModule } from '@angular/core';
import { ProjetbackComponent } from './projetback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ProjetbackComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,RouterModule
  ]
})
export class ProjetbackModule { }
