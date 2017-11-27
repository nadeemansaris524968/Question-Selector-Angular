import { AllQuestionsService } from './../services/all-questions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-questions',
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent implements OnInit {
  questions = [];

  constructor(private service: AllQuestionsService) { }

  ngOnInit() {
    this.service.getAllQuestions().subscribe( (questions) => {
      this.questions = questions;
    });
  }

}
