import { TestBed } from '@angular/core/testing';

import { ChangeQuestionService } from './change-question.service';

describe('ChangeQuestionService', () => {
  let service: ChangeQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
