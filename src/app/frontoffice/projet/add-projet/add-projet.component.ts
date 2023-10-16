import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condidature } from 'src/app/model/condidature';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from 'src/app/Service/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {
  public listOfCondidatures: Condidature;
  public projet: Projet;
  public action: string;

  constructor(private projetService: ProjetService, private route: Router) { }

  ngOnInit(): void { 
    this.action = 'Add new';
    this.projet = new Projet();
  }

  saveProjet() {  
    this.projetService.addProjet(this.projet).subscribe(
      () => {
        this.route.navigate(['projet/listprojet']);
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
