import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Service/event.service';
import { Event } from 'src/app/model/Event';

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.css']
})
export class EventsAddComponent implements OnInit {
  public event: any;
  public action: string;

  constructor(private eventService: EventService, private route: Router) { }

  ngOnInit(): void { 
    this.action = 'Add new';
    this.event = new Event();
  }

  saveEvent() {  
    this.eventService.addEvent(this.event).subscribe(
      () => {
        this.route.navigate(['backoffice/adminevent']);
      },
      error => {
        console.error('Error:', error);
      },
      () => {
        console.log('Complete');
      }
    );
  }

}
