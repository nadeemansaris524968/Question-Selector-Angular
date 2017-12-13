import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(
      result => {
        if (result) {
          this.invalidLogin = false;
          this.router.navigate(['/']);
        }
      },
      (error: Response) => {
        if (error.status === 400) {
          this.invalidLogin = true;
        }
        else {
          alert('Uh oh! Looks like the server is not running.');
        }
      });
  }
}
