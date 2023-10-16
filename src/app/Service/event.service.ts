import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participate } from '../model/Participate';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private httpclient:HttpClient) {

  }
  getall_Events(): Observable<any> {
   return this.httpclient.get("http://localhost:8088/events-service/listEvent");
}
participate(EventId:string,participate:Participate){
  return this.httpclient.post("http://localhost:8088/events-service/participate/"+EventId+ '/', participate);
}






}
