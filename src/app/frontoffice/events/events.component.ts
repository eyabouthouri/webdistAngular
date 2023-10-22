import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  constructor(private eventservice:EventService) { }
  listEvent:any[]=[]
  EventId:any
  addModal?:boolean=false;

  ngOnInit(): void {
    this.eventservice.getall_Events().subscribe(data=>{
     this.listEvent = data
     console.log(data)
    })


}
openModal(id:any){
  this.addModal=true;
   this.EventId=id
  console.log(this.addModal)
 }

}
