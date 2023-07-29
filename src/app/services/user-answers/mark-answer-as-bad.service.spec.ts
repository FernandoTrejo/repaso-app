import { TestBed } from '@angular/core/testing';

import { MarkAnswerAsBadService } from './mark-answer-as-bad.service';

describe('MarkAnswerAsBadService', () => {
  let service: MarkAnswerAsBadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkAnswerAsBadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
