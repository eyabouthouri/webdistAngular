import { UserService } from '../Service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user : User = new User();
  roles : any[]=[]
  constructor(
    private  UserService:UserService,
    private _router : Router
    ) { }

  ngOnInit(): void {

    //console.log(this.roles)
  }

  signUp(){


    this.roles.push("ROLE_USER");
    console.log(this.user)


    this.user.roles = this.roles
    this.UserService.SignUpWithUser(this.user).subscribe({
      next :() => this._router.navigateByUrl('/')
    })
  }

}
