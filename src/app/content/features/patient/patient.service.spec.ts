import { TestBed } from '@angular/core/testing';

import { PatientService } from './patient.service';
import { PatientModule } from './patient.module';

describe('PatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations : [PatientModule]
  }));

  it('should be created', () => {
    const service: PatientService = TestBed.get(PatientService);
    expect(service).toBeTruthy();
  });
});
