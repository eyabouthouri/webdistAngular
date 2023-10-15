import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from './model/projet';
import { Condidature } from './model/condidature';
@Injectable({
  providedIn: 'root'
})
export class CondidatureService {
  readonly API_URL = 'http://localhost:8088/projet-service';

  constructor(private httpClient: HttpClient) { }

  addCondidatureToProjet(projetId: number, c: Condidature) {
    return this.httpClient.post(`${this.API_URL}/condidate/${projetId}`, c);
  }
}
