import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { FrontofficeComponent } from './frontoffice.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormationComponent } from './formation/formation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { ShowReponseComponent } from './show-reponse/show-reponse.component';
import { SharedModule } from '../shared/shared.module';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    FrontofficeComponent,FormationComponent,InscriptionComponent, ShowReponseComponent, BlogComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,FormsModule,HttpClientModule,SharedModule

  ]
})
export class FrontofficeModule { }
