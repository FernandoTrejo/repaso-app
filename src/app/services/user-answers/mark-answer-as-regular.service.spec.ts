import { TestBed } from '@angular/core/testing';

import { MarkAnswerAsRegularService } from './mark-answer-as-regular.service';

describe('MarkAnswerAsRegularService', () => {
  let service: MarkAnswerAsRegularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkAnswerAsRegularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
