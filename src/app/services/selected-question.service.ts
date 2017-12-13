import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SelectedQuestionService {
  url = 'http://localhost:3000/questions';

  constructor(private http: Http) { }

  getQuestion(id: string) {

    return this.http.get(this.url + '/' + id, this.getRequestOptions())
      .map(response => response.json())
      .catch(this.handleError);
  }

  patchQuestion(answeredQuestion: any) {

    return this.http.patch(
      this.url + '/' + answeredQuestion._id,
      answeredQuestion,
      this.getRequestOptions()
    )
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

  private getRequestOptions() {
    var headers = new Headers();
    headers.append('x-auth', localStorage.getItem('token'));

    return new RequestOptions({ headers: headers });
  }
}
