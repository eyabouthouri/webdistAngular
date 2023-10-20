import { Inscription } from './../model/Inscription';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
addformation(formation:Formation,file:File){

  const formData = new FormData();
  formData.append('formation', JSON.stringify(formation));
  formData.append('file', file);
console.log(formData)
  return this.httpclient.post("http://localhost:8088/formation-service/addFormation", formData)
}
updateformation(formation:Formation,id:any){


  return this.httpclient.put("http://localhost:8088/formation-service/updateFormation/"+id, formation)
}
deleteFormation(id:any){
  return this.httpclient.delete("http://localhost:8088/formation-service/deleteFormation/"+id)
}
}
