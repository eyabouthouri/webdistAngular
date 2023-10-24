import { UserService } from '../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuthService } from '../Service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(
    private router: Router,
   private serviceauth:AuthService
    ) { }


  ngOnInit(): void {

  }

  login(){
    this.serviceauth.login(this.user)
  }
}
