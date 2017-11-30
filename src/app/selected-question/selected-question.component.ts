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

    let question = this.getQuestion(
                      independentQuestion.text, 
                      independentQuestion.answers, 
                      independentRadio.value);

    // construct RootCase - set Question
    let rootCase = new RootCase();
    rootCase.addQuestions(question);

    console.log(JSON.stringify(rootCase, undefined, 2));
  }

  getImageURL() {
    return this.cumulativeQuestion.img;
  }

  getQuestionMedia() {
    let media = new Media();

    let questionMedia = new QuestionMedia();
    questionMedia.setMediaURL(this.getImageURL());
    questionMedia.setMedia(media);

    return questionMedia;
  }

  getQuestionText(text: string) {
    let questionText = new QuestionText();
    questionText.addText(text);

    return questionText;
  }

  getQuestion(text: string, answerChoices: string[], correctAnswerChoice: string) {
    let question = new Question();
    question.setQuestionText(this.getQuestionText(text));
    question.addQuestionMedia(this.getQuestionMedia());
    for (var i = 0; i < answerChoices.length; i++) {
      question.addAnswerChoices(new AnswerChoice(answerChoices[i]));
    }

    question.addCorrectAnswerChoice(correctAnswerChoice);

    return question;
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
