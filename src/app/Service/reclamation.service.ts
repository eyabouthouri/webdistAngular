import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl = 'http://localhost:8088/reclamation-service'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getReclamations(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/getReclamations`);
  }

  getReclamationsTraitees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getReclamationsTraitees`);
  }

  getReclamationsNonTraitees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getReclamationsNonTraitees`);
  }

  deleteReclamation(id:number){
    return this.http.delete(`${this.baseUrl}/deleteReclamation/${id}`);
  }

  addReclamation(formData:FormData, pieceJointe: File) {
    const params = new HttpParams().set('pieceJointe', pieceJointe ? pieceJointe.name : '');
        return this.http.post(`${this.baseUrl}/addReclamation`, formData, {params});
  }

  filterCategorie(categorie: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filtercategorie?categorie=${categorie}`);
  }

  filterEval(evaluation: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filtereval?evaluation=${evaluation}`);
  }

}
