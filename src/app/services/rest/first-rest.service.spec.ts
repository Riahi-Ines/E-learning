import { TestBed } from '@angular/core/testing';

import { FirstRestService } from './first-rest.service';

describe('FirstRestService', () => {
  let service: FirstRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
