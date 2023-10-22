import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styleUrls: ['./events-admin.component.css']
})
export class EventsAdminComponent implements OnInit {

  events : any[];
  serverImageUrl: string = 'http://localhost:8088/events-service/uploads/';

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getall_Events().subscribe((data: any[]) => {
      this.events = data;
    });

  }
  
  formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options);
  }
  
}
