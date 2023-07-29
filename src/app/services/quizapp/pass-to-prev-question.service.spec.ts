import { TestBed } from '@angular/core/testing';

import { PassToPrevQuestionService } from './pass-to-prev-question.service';

describe('PassToPrevQuestionService', () => {
  let service: PassToPrevQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassToPrevQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
