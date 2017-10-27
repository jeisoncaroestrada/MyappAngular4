import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signUp(){
    let data = {
      email: this.email,
      password: this.password
    }
    let user = new User(this.email,this.name,this.password);
    this.authService.createUser(user)
    .subscribe(
      success => {
        if(success.token){
        };
      },
      error =>  {
      }
    );
  }

}
