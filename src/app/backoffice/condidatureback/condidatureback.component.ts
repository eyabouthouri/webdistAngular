import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CondidatureService } from 'src/app/Service/condidature.service';
import { Condidature } from 'src/app/model/condidature';
import { ProjetService } from 'src/app/Service/projet.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-condidatureback',
  templateUrl: './condidatureback.component.html',
  styleUrls: ['./condidatureback.component.css']
})
export class CondidaturebackComponent implements OnInit {
  nom :any
  prenom:any
  email:any
  tel:any
  pieceJointe:any
  lettreMotivation:any
  listcondid:any
  projectId: number;
  linkedCondidatures: any[] = [];
  showCondidatures: boolean = false;

  constructor(private condidatureService: CondidatureService,private projetService: ProjetService,  private cdr: ChangeDetectorRef,private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['id'];
      console.log('Received projectId:', this.projectId);
      
      this.condidatureService.getCondidaturesByProjetId(this.projectId).subscribe(data => {
        this.linkedCondidatures = data;
        console.log('Données reçues:', data);
      }, error => {
        console.error('Erreur lors de la récupération des candidatures:', error);
      });
  
      this.cdr.detectChanges();
    });
  }
  


  download(fileName: string): void {
    this.condidatureService.downloadFile(fileName).subscribe(blob => {
      let link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  }


  delete(c: Condidature) {
    let i = this.linkedCondidatures.indexOf(c);
  this.condidatureService.deleteCondidature(c.idCondidature).subscribe(
      ()=>this.linkedCondidatures.splice(i, 1)
    )
  }
  
  
}