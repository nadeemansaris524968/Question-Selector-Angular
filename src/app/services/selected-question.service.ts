import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SelectedQuestionService {
  url = 'http://localhost:3500/questions';

  constructor(private http: Http) { }

  getQuestion(id: string) {
    return this.http.get(this.url + '/' + id).map(response => response.json());
  }
}
