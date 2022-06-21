import { TestBed } from '@angular/core/testing';

import { PixapiService } from './pixapi.service';

describe('PixapiService', () => {
  let service: PixapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
