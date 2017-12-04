import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AllQuestionsService {
  url = 'http://localhost:3000/questions';

  constructor(private http: Http) { }

  getAllQuestions() {
    return this.http.get(this.url).map(response => response.json());
  }
}
