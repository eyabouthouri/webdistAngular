import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetComponent } from './frontoffice/projet/projet.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './frontoffice/inscription/inscription.component';
import { FrontofficeComponent } from './frontoffice/frontoffice.component';
import { FrontofficeModule } from './frontoffice/frontoffice.module';
import { HeaderComponent } from './frontoffice/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderbackComponent } from './backoffice/headerback/headerback.component';
import { FooterbackComponent } from './backoffice/footerback/footerback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,HeaderbackComponent,FooterbackComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, FrontofficeModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
