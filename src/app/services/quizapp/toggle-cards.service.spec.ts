import { TestBed } from '@angular/core/testing';

import { ToggleCardsService } from './toggle-cards.service';

describe('ToggleCardsService', () => {
  let service: ToggleCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
