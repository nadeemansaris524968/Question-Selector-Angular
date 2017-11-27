import { FormArray, FormControl, FormGroup } from '@angular/forms';
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
  cumulativeQuestion:any;
  independentQuestionText: string;
  // independentAnswerChoice: string;
  // selectedQuestion: any;
  independentQuestions: any[];
  ifThens: any[];
  img: string;

  form = new FormGroup({
    
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
        this.cumulativeQuestion = question;
        this.independentQuestions = question.independent;
        this.ifThens = question.if_thens;
        this.img = question.img;
      });

  }

  independentAnswer(independentQuestion: any, independentRadio: HTMLInputElement) {

    // When the form is loaded and no question was answered or 
    // If a different question was answered
    // if (!this.independentQuestionText || this.independentQuestionText !== independentQuestion.text) {
    //   this.independentQuestionText = independentQuestion.text;
    //   independentQuestion["answerChoice"] = independentRadio.value;

    //   let independentQuestionFormControl = new FormControl(independentQuestion);
    //   (this.form.get('independent') as FormArray).push(independentQuestionFormControl);
    // }
    independentQuestion["answerChoice"] = independentRadio.value;
    // console.log("**************  Complete Form Value  **************");
    // console.log(JSON.stringify(this.cumulativeQuestion, undefined, 2));
  }

  ifAnswer(ifQuestion: any, ifRadio: HTMLInputElement) {
    ifQuestion.if_question["answerChoice"] = ifRadio.value;
    console.log("**************  Complete Form Value  **************");
    console.log(JSON.stringify(this.cumulativeQuestion, undefined, 2));
  }

  submit(form: HTMLInputElement) {
    
  }

}
