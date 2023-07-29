import { TestBed } from '@angular/core/testing';

import { ManageQuizStateService } from './manage-quiz-state.service';

describe('ManageQuizStateService', () => {
  let service: ManageQuizStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageQuizStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
