import { RootCase } from './../models/root-case';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class QuestionAnsweringService {
  url = 'http://localhost:8080/CrunchifyTutorials/api/crunchifyService';

  constructor(private http: Http) { }

  postQuestion(rootCase: RootCase) {
    return this.http.post(this.url, JSON.stringify(rootCase))
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }
}
