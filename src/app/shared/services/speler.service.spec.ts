import { TestBed } from '@angular/core/testing';

import { SpelerService } from './speler.service';

describe('SpelerService', () => {
  let service: SpelerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpelerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
