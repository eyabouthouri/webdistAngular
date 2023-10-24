import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: any;
  role: any;
  username: any;

  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('Token')); // Initialisez loggedIn avec la valeur de localStorage

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(
    private router: Router,
    private serviceuser: UserService
  ) {}

  login(user: User) {
    this.serviceuser.LoginWithUser(user).subscribe((res: any) => {
      console.log(res.body);
      this.data = res.body.token;
      this.role = res.body.roles;
      this.username = res.body.username;
      localStorage.setItem('Token', this.data);
      localStorage.setItem('role', this.role);
      localStorage.setItem('username', this.username);
      this.loggedIn.next(true);
      if (this.role == 'ROLE_USER') {
        this.router.navigate(['/frontoffice/formation']);
      } else {
        this.router.navigate(['/backoffice/back']);
      }
    });
  }

  logout() {
    localStorage.removeItem('Token');
    localStorage.removeItem('user');
    this.loggedIn.next(false); // Mettez à jour l'état de connexion
    this.router.navigate(['/login']);
  }
}
