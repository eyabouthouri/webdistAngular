import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/Service/projet.service';
import { Projet } from 'src/app/model/projet';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';

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
  constructor(private projetservice: ProjetService, private HttpClient:HttpClient, private cdr: ChangeDetectorRef) {
   

    }
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
  
  }