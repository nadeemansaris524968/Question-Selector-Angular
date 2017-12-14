import { Router } from '@angular/router';
import { AllQuestionsService } from './../services/all-questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
  noQuestions: boolean;
  questions = [];

  constructor(private router: Router, private service: AllQuestionsService) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.service.getAllQuestions().subscribe(
        questions => {
          if (questions.length === 0)
            this.noQuestions = true;
          else
            this.noQuestions = false;

          this.questions = questions;
        });
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
