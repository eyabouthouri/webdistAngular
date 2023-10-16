import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  private baseUrl = 'http://localhost:8088/reclamation-service'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  getReponse() {
    return this.http.get(`${this.baseUrl}/getReponse`);
  }
  
  addReclamation(idReclamation: number,formData:FormData) {
        return this.http.post(`${this.baseUrl}/addReponse/${idReclamation}`, formData);
  }
  

}
