import { RootCase } from '../models/root-case';
import { AnswerChoice } from '../models/answer-choice';
import { QuestionText } from './../models/question-text';
import { QuestionMedia } from '../models/question-media';
import { Media } from './../models/media';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SelectedQuestionService } from '../services/selected-question.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-selected-question',
  templateUrl: './selected-question.component.html',
  styleUrls: ['./selected-question.component.css']
})
export class SelectedQuestionComponent implements OnInit {
  id: string;
  cumulativeQuestion: any;
  independentQuestionText: string;
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

    independentQuestion["answerChoice"] = independentRadio.value;

    // Get img src 
    let imageURL = this.cumulativeQuestion.img;

    let media = new Media();

    let questionMedia = new QuestionMedia();
    questionMedia.setMediaURL(imageURL);
    questionMedia.setMedia(media);

    // Get question text 
    let text = independentQuestion.text;

    let questionText = new QuestionText();
    questionText.addText(text);

    // Get answer choices
    let answers: string[] = independentQuestion.answers;
    let question = new Question();
    question.setQuestionText(questionText);
    question.addQuestionMedia(questionMedia);

    for (var i = 0; i < answers.length; i++) {
      question.addAnswerChoices(new AnswerChoice(answers[i]));
    }

    question.addCorrectAnswerChoice(independentRadio.value);

    // construct RootCase - set Question
    let rootCase = new RootCase();
    rootCase.addQuestions(question);

    console.log(JSON.stringify(rootCase, undefined, 2));

    // console.log("**************  Complete Form Value  **************");
    // console.log(JSON.stringify(this.cumulativeQuestion, undefined, 2));
  }

  ifAnswer(ifQuestion: any, ifRadio: HTMLInputElement) {

    if (ifRadio.value === "Yes")
      ifQuestion.if_question["showThenQuestions"] = true;
    else
      ifQuestion.if_question["showThenQuestions"] = false;

    ifQuestion.if_question["answerChoice"] = ifRadio.value;
  }

  thenAnswer(thenQuestion: any, thenRadio: HTMLInputElement) {

    thenQuestion["answerChoice"] = thenRadio.value;
  }

  submit(form: HTMLInputElement) {
    this.service.patchQuestion(this.cumulativeQuestion);
  }

}
