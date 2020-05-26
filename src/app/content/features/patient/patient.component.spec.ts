import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientComponent } from './patient.component';
import { MaterialModule } from '../../../material.module';
import { DataTablesModule } from 'angular-datatables';
import { PatientService } from './patient.service';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let httpClientSpy: { get: jasmine.Spy };
let patientService: PatientService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientComponent ],
      imports:[MaterialModule,DataTablesModule],
      providers: [PatientService]
    })
    .compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    patientService = new PatientService(<any> httpClientSpy);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
