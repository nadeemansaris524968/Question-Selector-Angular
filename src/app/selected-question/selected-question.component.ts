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
  independentQuestions: any[];
  ifThens: any[];
  img: string;

  form = new FormGroup({

  });

  constructor(private route: ActivatedRoute, private questionSelectorService: SelectedQuestionService) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {
        this.id = params.get('id');
      });

    this.questionSelectorService.getQuestion(this.id)
      .subscribe((question) => {
        this.cumulativeQuestion = question;
        this.independentQuestions = question.independent;
        this.ifThens = question.if_thens;
        this.img = question.img;
      });
  }

  independentAnswer(independentQuestion: any, independentRadio: HTMLInputElement) {
    independentQuestion["answerChoice"] = independentRadio.value;
    
    let rootCase = this.getQuestionAnswering(
      independentQuestion.text,
      independentQuestion.answers,
      independentRadio.value
    );
  }

  ifAnswer(ifQuestion: any, ifRadio: HTMLInputElement) {
    if (ifRadio.value === "Yes")
      ifQuestion.if_question["showThenQuestions"] = true;
    else
      ifQuestion.if_question["showThenQuestions"] = false;

    ifQuestion.if_question["answerChoice"] = ifRadio.value;

    let rootCase = this.getQuestionAnswering(
      ifQuestion.if_question.text,
      ifQuestion.if_question.answers,
      ifRadio.value
    );
  }

  thenAnswer(thenQuestion: any, thenRadio: HTMLInputElement) {
    thenQuestion["answerChoice"] = thenRadio.value;

    let rootCase = this.getQuestionAnswering(
      thenQuestion.text,
      thenQuestion.answers,
      thenRadio.value
    );
  }

  submit(form: HTMLInputElement) {
    this.questionSelectorService.patchQuestion(this.cumulativeQuestion).subscribe();
  }

  // ************** HELPER METHODS ************** //

  getImageURL() {
    return this.cumulativeQuestion.img;
  }

  createQuestionMedia() {
    let media = new Media();

    let questionMedia = new QuestionMedia();
    questionMedia.setMediaURL(this.getImageURL());
    questionMedia.setMedia(media);

    return questionMedia;
  }

  createQuestionText(text: string) {
    let questionText = new QuestionText();
    questionText.addText(text);

    return questionText;
  }

  createQuestion(text: string, answerChoices: string[], correctAnswerChoice: string) {
    let question = new Question();
    question.setQuestionText(this.createQuestionText(text));
    question.addQuestionMedia(this.createQuestionMedia());
    for (var i = 0; i < answerChoices.length; i++) {
      question.addAnswerChoices(new AnswerChoice(answerChoices[i]));
    }

    question.addCorrectAnswerChoice(correctAnswerChoice);

    return question;
  }

  getQuestionAnswering(text: string, answerChoices: string[], answerChoice: string) {

    let question = this.createQuestion(text, answerChoices, answerChoice);
    let rootCase = new RootCase();
    rootCase.addQuestions(question);

    return rootCase;
  }

}
