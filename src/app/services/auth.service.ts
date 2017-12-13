import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  url = 'http://localhost:3000/users/login';
  constructor(private http: Http) {
  }

  login(credentials) {
    return this.http.post(this.url, credentials)
      .map(response => {
        if (response && response.headers.has('x-auth')){
          localStorage.setItem('token', response.headers.get('x-auth'));          
          return true;
        }
        return false;
      });
  }

  logout() {
  }

  isLoggedIn() {
    return false;
  }
}

