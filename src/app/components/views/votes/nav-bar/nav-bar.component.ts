import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() searching = new EventEmitter;
  userName: string = '';
  searchText: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    //validate if session-token exists
    if(sessionStorage.getItem('session-token')){
      let storedToken = JSON.parse(sessionStorage.getItem('session-token'));
      let now = new Date();
      // and validate if session-token dont no expire
      if(storedToken.expires_at >= now.getTime())
        this.userName = storedToken.user_name;
    }
  }

  logout(){
    this.authService.logout()
  }

  search(){
    this.searching.emit(
      this.searchText
    )
  }



}
