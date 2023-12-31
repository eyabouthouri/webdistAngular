import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from 'src/app/model/projet';
import { Condidature } from 'src/app/model/condidature';
import { Observable } from 'rxjs';

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

  deleteProjet(id:number){
    return this.httpClient.delete("http://localhost:8088/projet-service/deleteProjet/"+id)
  }
  searchByNom(nom: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.API_URL}/search/${nom}`);
  }
}
