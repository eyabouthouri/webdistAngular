import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from 'src/app/model/projet';
import { Condidature } from 'src/app/model/condidature';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CondidatureService {
  readonly API_URL = 'http://localhost:8088/projet-service';

  constructor(private httpClient: HttpClient) { }

  addCondidatureToProjet(projetId: number, formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.API_URL}/condidate/${projetId}`, formData);
  }
  getallCondidature() {
    return this.httpClient.get(`${this.API_URL}/listCondid`);
  }

  downloadFile(fileName: string): Observable<Blob> {
    const url = `${this.API_URL}/download/${fileName}`;
    return this.httpClient.get(url, { responseType: 'blob' });
  }
  deleteCondidature(id:number){
    return this.httpClient.delete("http://localhost:8088/projet-service/deleteCondidature/"+id)
  }
}