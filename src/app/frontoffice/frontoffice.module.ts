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
import { EventsComponent } from './events/events.component';
import { ParticipateComponent } from './participate/participate.component';
import { ShowReponseComponent } from './show-reponse/show-reponse.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { RecruterComponent } from './recruter/recruter.component';



@NgModule({
  declarations: [

    FrontofficeComponent,FormationComponent,InscriptionComponent, EventsComponent, ParticipateComponent,ShowReponseComponent,LoginComponent, SignupComponent, ProfileComponent, RecruterComponent,


  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,FormsModule,HttpClientModule,SharedModule

  ]
})
export class FrontofficeModule { }
