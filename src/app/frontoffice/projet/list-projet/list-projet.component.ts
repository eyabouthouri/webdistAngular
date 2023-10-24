import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/model/projet';
import { ProjetService } from 'src/app/Service/projet.service';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {
nom:any
description:any
dateProjet:any
prix:any
projet:Projet
listprojet:any
searchTerm: string;
projets: any[] = [];


  constructor(private projetservice: ProjetService,private HttpClient:HttpClient) {
 
 
 
 
  }
  
  ngOnInit(): void {

    this.projetservice.getallProjet().subscribe(
      data => {
          this.listprojet = JSON.parse(JSON.stringify(data));
          console.log("listtttt", this.listprojet);
      })
     
  
    } 


    search(): void {
      if (this.searchTerm) { // if there's a searchTerm, filter results
          this.projetservice.searchByNom(this.searchTerm).subscribe(data => {
              this.listprojet = data;
          });
      } else { // if searchTerm is empty, fetch all projects
          this.projetservice.getallProjet().subscribe(data => {
              this.listprojet = data;
          });
        }
      }
}
