import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isAuthenticated = false;

  constructor(private http: HttpClient,private router : Router) { }

  LoginWithUser(formData:any){
    return this.http.post("http://localhost:8088/user-service/api/auth/signin", formData, { observe: 'response' })
  }

  SignUpWithUser(formData:any){
    return this.http.post("http://localhost:8088/user-service/api/auth/signup", formData, { observe: 'response' })
  }
}
