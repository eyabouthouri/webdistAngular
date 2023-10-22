import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Service/reclamation.service';
import { Reclamation } from 'src/app/model/reclamation';

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
  deleteReclamation(d: Reclamation) {

    let i = this.reclamations.indexOf(d);
    this.reclamationService.deleteReclamation(d.idReclamation).subscribe(
      ()=>this.reclamations.splice(i, 1))
  }

}
