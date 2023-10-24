// header.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedin: boolean;

  constructor(private authService:AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedin = isLoggedIn;
      console.log(this.isLoggedin)

    });
  }

  logout() {
    this.authService.logout();
  }
}
