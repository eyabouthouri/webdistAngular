import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProjetComponent } from './projet/projet.component';
import { HomeComponent } from './home/home.component';
import { ListProjetComponent } from './projet/list-projet/list-projet.component';
import { AddProjetComponent } from './projet/add-projet/add-projet.component';
import { ProjetModule } from './projet/projet.module';
import { FormsModule } from '@angular/forms';
import { FooterbackComponent } from './footerback/footerback.component';
import { HeaderbackComponent } from './headerback/headerback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FooterbackComponent,
    HeaderbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
