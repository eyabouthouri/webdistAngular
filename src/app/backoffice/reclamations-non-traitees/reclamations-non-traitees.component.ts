import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Service/reclamation.service';

@Component({
  selector: 'app-reclamations-non-traitees',
  templateUrl: './reclamations-non-traitees.component.html',
  styleUrls: ['./reclamations-non-traitees.component.css']
})
export class ReclamationsNonTraiteesComponent implements OnInit {

  reclamations : any[];
  serverImageUrl: string = 'http://localhost:8088/reclamation-service/uploads/';

  constructor(private reclamationService:ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getReclamationsNonTraitees().subscribe((data: any[]) => {
      this.reclamations = data;
    });

  }

}
