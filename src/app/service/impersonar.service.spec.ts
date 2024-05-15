import { TestBed } from '@angular/core/testing';

import { ImpersonarService } from './impersonar.service';

describe('ImpersonarService', () => {
  let service: ImpersonarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpersonarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
