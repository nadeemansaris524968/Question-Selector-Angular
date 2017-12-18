import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  incorrectPassword: boolean;
  noUser: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(
      result => {
        if (result) {
          this.incorrectPassword = false;
          this.router.navigate(['/']);
        }
      },
      (error: Response) => {
        if (error.status === 400 && error['_body'] === 'Incorrect Password') {
          this.incorrectPassword = true;
        }
        else if (error.status === 400 && error['_body'] === 'No user exists') {
          this.noUser = true;
        }
        else {
          alert('Uh oh! Looks like the server is not running.');
        }
      });
  }
}
