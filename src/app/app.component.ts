import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  isFrontOfficeRoute(): boolean {
    return this.router.url.includes('frontoffice');
  }
  isbackRoute(): boolean {
    return this.router.url.includes('backoffice');
  }
  ngOnInit() {
    }
  title = 'webdistProjet';
}
