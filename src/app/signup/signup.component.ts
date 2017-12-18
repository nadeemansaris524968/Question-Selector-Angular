import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorSignup: boolean;

  constructor(
    private router: Router,
    private authService: AuthService) { }


  ngOnInit() {
  }

  signup(userDetails) {
    this.authService.signup(userDetails).subscribe(
        (result) => {
          this.router.navigate(['/']);
        },
        (error: Response) => {
          if (error.status === 400)
            this.errorSignup = true;
          else 
            alert('Uh oh! Looks like the server is not running.');
        }
      );
  }

}
