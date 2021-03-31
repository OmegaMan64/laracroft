import { TestBed } from '@angular/core/testing';

import { TombraiderService } from './tombraider.service';

describe('TombraiderService', () => {
  let service: TombraiderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TombraiderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
