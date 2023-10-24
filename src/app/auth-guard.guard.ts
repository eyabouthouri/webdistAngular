import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) { }
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = localStorage.getItem('Token');
      let role = localStorage.getItem('role')
      try {

        if (token === null || helper.isTokenExpired(token)) {
          this.router.navigate(['/login'])
          return false
        }
        else{
          if (role === 'ROLE_USER' && state.url.includes('/backoffice')) {
            this.router.navigate(['/frontoffice']);
            return false;
          }
        }
        return true;
      } catch (err) {
        return false
      }

    }


}
