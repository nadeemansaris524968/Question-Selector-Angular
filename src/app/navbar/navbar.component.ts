import { AuthService } from './../services/auth.service';
import { JwtHelper } from 'angular2-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  welcomeMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('token')){
      let jwtHelper = new JwtHelper();
      let token = localStorage.getItem('token');
      let decoded = jwtHelper.decodeToken(token)
      this.welcomeMessage = 'Welcome ' + decoded.firstName + decoded.lastName + '!';
    }
  }
  
}
