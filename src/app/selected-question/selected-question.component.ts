import { SelectedQuestionService } from '../services/selected-question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-question',
  templateUrl: './selected-question.component.html',
  styleUrls: ['./selected-question.component.css']
})
export class SelectedQuestionComponent implements OnInit {
  selectedQuestionId;
  constructor(private route: ActivatedRoute, private service: SelectedQuestionService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedQuestionId = params.get('id');
      console.log(this.selectedQuestionId);
    })
  }

}
