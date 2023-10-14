import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetRoutingModule } from './projet-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { ProjetComponent } from './projet.component';
import { FormsModule } from '@angular/forms';
import { AddProjetComponent } from './add-projet/add-projet.component';


@NgModule({
  declarations: [
    ProjetComponent,
    ListProjetComponent,
    AddProjetComponent,
  ],
  imports: [
    CommonModule,
    ProjetRoutingModule,HttpClientModule,
    FormsModule

  ]
})
export class ProjetModule { 

  

}
