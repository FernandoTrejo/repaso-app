import { TestBed } from '@angular/core/testing';

import { PassToNextQuestionService } from './pass-to-next-question.service';

describe('PassToNextQuestionService', () => {
  let service: PassToNextQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassToNextQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
