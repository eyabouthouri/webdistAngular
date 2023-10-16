import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addReclamation(formData:FormData) {
        return this.http.post(`${this.baseUrl}/addReclamation`, formData);
  }
  

}
