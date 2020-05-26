import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewComponent } from './patient-view.component';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModule } from '../../../../material.module';
import { PatientService } from '../patient.service';

describe('PatientViewComponent', () => {
  let component: PatientViewComponent;
  let fixture: ComponentFixture<PatientViewComponent>;
  let httpClientSpy: { get: jasmine.Spy };
let patientService: PatientService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewComponent ],
      imports: [MaterialModule,DataTablesModule],
      providers: [PatientService]
    })
    .compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    patientService = new PatientService(<any> httpClientSpy);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
