import { GlobalErrorHandler } from './globalerrorhandler';
import { TestBed } from '@angular/core/testing';

describe('GlobalErrorHandler', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [GlobalErrorHandler]
  }));
  it('should create an instance', () => {
    const service: GlobalErrorHandler =  TestBed.get(GlobalErrorHandler);
    expect(service).toBeTruthy();
  });
});
