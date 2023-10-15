import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from './model/projet';
import { Condidature } from './model/condidature';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  
  readonly API_URL = 'http://localhost:8088/projet-service';

  constructor(private httpClient: HttpClient) { }

  getallProjet() {
    return this.httpClient.get(`${this.API_URL}/listProjet`);
  }
  addProjet(p :Projet){
    return this.httpClient.post(`${this.API_URL}/addProjet`,p);
  } 


}
