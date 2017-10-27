import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String = '';
  password: String = '';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
  }

  login(){
    let data = {
      email: this.email,
      password: this.password
    }
    this.authService.login(data)
    .subscribe(
      success => {
        if(success.token){
          this.router.navigate(['/votes']);
        };
      },
      error =>  {
      }
    );
  }

}
