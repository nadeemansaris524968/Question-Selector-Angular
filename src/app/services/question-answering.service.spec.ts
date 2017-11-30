import { TestBed, inject } from '@angular/core/testing';

import { QuestionAnsweringService } from './question-answering.service';

describe('QuestionAnsweringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionAnsweringService]
    });
  });

  it('should be created', inject([QuestionAnsweringService], (service: QuestionAnsweringService) => {
    expect(service).toBeTruthy();
  }));
});
