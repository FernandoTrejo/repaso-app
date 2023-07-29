import { TestBed } from '@angular/core/testing';

import { InitUserAnswersService } from './init-user-answers.service';

describe('InitUserAnswersService', () => {
  let service: InitUserAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitUserAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
