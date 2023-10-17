import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/Service/projet.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { CondidatureService } from 'src/app/Service/condidature.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
    private projetservice: ProjetService,
    private condidatureService: CondidatureService,
    private HttpClient: HttpClient,) { }

  ngOnInit(): void {
  }
  
  navigateToAddProjet(event: Event) {
    event.preventDefault();
    this.router.navigate(['/frontoffice/projet/addprojet']);
  }
  
}
