import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { Participate } from 'src/app/model/Participate';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.component.html',
  styleUrls: ['./participate.component.css']
})
export class ParticipateComponent implements OnInit {

  constructor(private eventservice:EventService) { }
  @Input() openModel : boolean =true;
  @Input() EventId : any ;
  inscri:Participate
  ngOnInit(): void {
    this.inscri=new Participate()
  }
  participer(participate:Participate){
    console.log(this.EventId)
     this.eventservice.participate(this.EventId,participate).subscribe(data=>{
      console.log(data)
     })
  }
}
