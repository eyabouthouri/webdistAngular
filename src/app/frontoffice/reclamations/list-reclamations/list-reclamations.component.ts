import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/model/reclamation';
import { Reponse } from 'src/app/model/reponse';
import { ReclamationService } from 'src/app/Service/reclamation.service';

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.css']
})
export class ListReclamationsComponent implements OnInit {
  serverImageUrl: string = 'http://localhost:8088/reclamation-service/uploads/';
  reclamations: any[];

  constructor(private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.reclamationService.getReclamations().subscribe((data: any[]) => {
      this.reclamations = data;
    });
  }

  deleteReclamation(d: Reclamation) {
    console.log('aaaaaaaaa',this.serverImageUrl,d.pieceJointe);

    let i = this.reclamations.indexOf(d);
    this.reclamationService.deleteReclamation(d.idReclamation).subscribe(
      ()=>this.reclamations.splice(i, 1))
  }

  showResponse(d: Reponse){

  }

}
