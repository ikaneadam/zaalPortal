import { TestBed } from '@angular/core/testing';

import { ZaalsessieService } from './zaalsessie.service';

describe('ZaalsessieService', () => {
  let service: ZaalsessieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZaalsessieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
