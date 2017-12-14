import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AllQuestionsService {
  url = 'http://localhost:3000/questions';

  constructor(private http: Http) { }

  getAllQuestions() {
    return this.http.get(this.url, this.getRequestOptions()).map(response => response.json());
  }

  private getRequestOptions() {
    var headers = new Headers();
    headers.append('x-auth', localStorage.getItem('token'));

    return new RequestOptions({ headers: headers });
  }

}
