import { TestBed, inject } from '@angular/core/testing';

import { SelectedQuestionService } from './selected-question.service';

describe('SelectedQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedQuestionService]
    });
  });

  it('should be created', inject([SelectedQuestionService], (service: SelectedQuestionService) => {
    expect(service).toBeTruthy();
  }));
});
