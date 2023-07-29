import { TestBed } from '@angular/core/testing';

import { SearchQuestionsByQuizUUIDService } from './search-questions-by-quiz-uuid.service';

describe('SearchQuestionsByQuizUUIDService', () => {
  let service: SearchQuestionsByQuizUUIDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchQuestionsByQuizUUIDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
