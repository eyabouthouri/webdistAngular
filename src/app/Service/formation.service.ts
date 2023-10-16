import { Inscription } from './../model/Inscription';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Formation } from '../model/Formation';
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private httpclient:HttpClient) {

   }
   getall_Formation(): Observable<any> {
    return this.httpclient.get("http://localhost:8088/formation-service/listFormation");
}
inscription(idFormation:string,inscription:Inscription,IdUser:string){
  return this.httpclient.post("http://localhost:8088/formation-service/inscriver/"+idFormation+'/'+IdUser ,inscription)
}

}
