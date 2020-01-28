import { TestBed } from '@angular/core/testing';

import { MovieCardsService } from './movie-cards.service';

describe('MovieCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieCardsService = TestBed.get(MovieCardsService);
    expect(service).toBeTruthy();
  });
});
