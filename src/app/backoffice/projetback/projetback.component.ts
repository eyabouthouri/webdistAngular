import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/Service/projet.service';
import { Projet } from 'src/app/model/projet';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { CondidatureService } from 'src/app/Service/condidature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projetback',
  templateUrl: './projetback.component.html',
  styleUrls: ['./projetback.component.css']
})
export class ProjetbackComponent implements OnInit {
  nom:any
  description:any
  dateProjet:any
  prix:any
  projet:Projet
  listprojet:any
  linkedCondidatures: any[] = [];
  showCondidatures: boolean = false;

  constructor(
    private router: Router,
    private projetservice: ProjetService,
    private condidatureService: CondidatureService,
    private HttpClient: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }
  
    ngOnInit(): void {
      this.projetservice.getallProjet().subscribe(data => {
        this.listprojet = JSON.parse(JSON.stringify(data));
        console.log("listtttt", this.listprojet);
        this.cdr.detectChanges();
      });
    }
  
  
    delete(c: Projet) {
      let i = this.listprojet.indexOf(c);
    this.projetservice.deleteProjet(c.projetId).subscribe(
        ()=>this.listprojet.splice(i, 1)
      )
    }
    getCondidaturesByProjet(projectId: number) {
      console.log('Bouton cliqué, projetId:', projectId);

      this.condidatureService.getCondidaturesByProjetId(projectId).subscribe(data => {
        this.linkedCondidatures = data;
        console.log('Données reçues:', data);
        this.linkedCondidatures = data;
      }, error => {
        console.error('Erreur lors de la récupération des candidatures:', error);
      });      
    }
    navigateToCondidatures(projectId: number, event: Event) {
      event.preventDefault();
      this.router.navigate(['/backoffice/condidtback', projectId]);
    }
    
    
  }