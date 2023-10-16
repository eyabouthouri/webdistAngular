import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Service/reclamation.service';

@Component({
  selector: 'app-reclamations-admin',
  templateUrl: './reclamations-admin.component.html',
  styleUrls: ['./reclamations-admin.component.css']
})
export class ReclamationsAdminComponent implements OnInit {

  reclamations : any[];
  serverImageUrl: string = 'http://localhost:8088/reclamation-service/uploads/';

  constructor(private reclamationService:ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getReclamationsTraitees().subscribe((data: any[]) => {
      this.reclamations = data;
    });

  }

}
