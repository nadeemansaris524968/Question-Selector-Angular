import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  signupURL = 'http://localhost:3000/users';
  loginURL = 'http://localhost:3000/users/login';
  logoutURL = 'http://localhost:3000/users/me/token';
  constructor(private http: Http) {
  }

  signup(userDetails) {
    return this.http.post(this.signupURL, userDetails)
      .map(response => {
        if (response && response.headers.has('x-auth')) {
          localStorage.setItem('token', response.headers.get('x-auth'));
          return true;
        }
        return false;
      })
  }

  login(credentials) {
    return this.http.post(this.loginURL, credentials)
      .map(response => {
        if (response && response.headers.has('x-auth')) {
          localStorage.setItem('token', response.headers.get('x-auth'));
          return true;
        }
        return false;
      });
  }

  logout() {
    if (localStorage.getItem('token')) {
      var headers = new Headers();
      headers.append('x-auth', localStorage.getItem('token'));
      var options = new RequestOptions({ headers: headers });

      localStorage.removeItem('token');
      return this.http.delete(this.logoutURL, options);
    }
  }

  isLoggedIn() {
    if (localStorage.getItem('token'))
      return true;
    else
      return false;
  }
}

