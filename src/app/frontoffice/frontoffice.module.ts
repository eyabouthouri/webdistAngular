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
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


@NgModule({
  declarations: [
    FrontofficeComponent,FormationComponent,InscriptionComponent, LoginComponent, SignupComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,FormsModule,HttpClientModule,

  ]
})
export class FrontofficeModule { }
