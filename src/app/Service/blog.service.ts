import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiURL = 'http://localhost:3001';

  constructor(private http: HttpClient) { 
  
  }
  
  getBlogs(): Observable<any> {
    return this.http.get(`${this.apiURL}/endpoint`);
  }

}