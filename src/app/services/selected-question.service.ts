import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SelectedQuestionService {
  url = 'http://localhost:3500/questions';

  constructor(private http: Http) { }

  getQuestion(id: string) {
    return this.http.get(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);
  }

  patchQuestion(answeredQuestion: any) {
    console.log(JSON.stringify(answeredQuestion, undefined, 2));
    
    // this.http.patch(this.url + '/' + answeredQuestion._id, answeredQuestion);
  }

  private handleError(error: Response){
    return Observable.throw(error);
  }
}
