// header.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'src/app/Service/projet.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { CondidatureService } from 'src/app/Service/condidature.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedin: boolean;

  constructor( private router: Router,
    private projetservice: ProjetService,
    private condidatureService: CondidatureService,
    private HttpClient: HttpClient,private authService:AuthService) {}
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedin = isLoggedIn;
      console.log(this.isLoggedin)

    });
  }

  navigateToAddProjet(event: Event) {
    event.preventDefault();
    this.router.navigate(['/frontoffice/projet/addprojet']);
  }


  logout() {
    this.authService.logout();
  }
}
