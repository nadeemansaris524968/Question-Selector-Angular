import { SelectedQuestionService } from '../services/selected-question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-question',
  templateUrl: './selected-question.component.html',
  styleUrls: ['./selected-question.component.css']
})
export class SelectedQuestionComponent implements OnInit {
  id;
  selectedQuestion;
  constructor(private route: ActivatedRoute,
    private service: SelectedQuestionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    
    this.service.getQuestion(this.id)
      .subscribe((question) => {
        this.selectedQuestion = question;
      });
  }

}
