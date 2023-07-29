import { TestBed } from '@angular/core/testing';

import { MarkAnswerAsGoodService } from './mark-answer-as-good.service';

describe('MarkAnswerAsGoodService', () => {
  let service: MarkAnswerAsGoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkAnswerAsGoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
