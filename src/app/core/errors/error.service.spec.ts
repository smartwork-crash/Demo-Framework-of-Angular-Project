import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[ErrorService]
  }));

  it('should be created', () => {
    const service: ErrorService = TestBed.get(ErrorService);
    expect(service).toBeTruthy();
  });
});
