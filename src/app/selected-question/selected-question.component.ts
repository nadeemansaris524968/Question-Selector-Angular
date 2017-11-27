import { FormArray, FormGroup } from '@angular/forms';
import { SelectedQuestionService } from '../services/selected-question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-question',
  templateUrl: './selected-question.component.html',
  styleUrls: ['./selected-question.component.css']
})
export class SelectedQuestionComponent implements OnInit {
  id: string;

  selectedQuestion: any;
  independentQuestions: any[];
  ifThens: any[];
  img: string;

  form = new FormGroup({
    independent: new FormArray([])
  });

  constructor(private route: ActivatedRoute, private service: SelectedQuestionService) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {
        this.id = params.get('id');
      });

    this.service.getQuestion(this.id)
      .subscribe((question) => {
        this.independentQuestions = question.independent;
        this.img = question.img;
      });

  }

  addToIndependentFormArray() {
    let independent = this.selectedQuestion['independent'];
    console.log(independent);
    // for(var i = )
    // (this.form.get('independent') as FormArray).push()
  }

}
