import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddComponent } from './patient-add.component';
import { MaterialModule } from '../../../../material.module';
import { AppModule } from '../../../../app.module';

describe('PatientAddComponent', () => {
  let component: PatientAddComponent;
  let fixture: ComponentFixture<PatientAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAddComponent ],
      imports: [MaterialModule, AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
