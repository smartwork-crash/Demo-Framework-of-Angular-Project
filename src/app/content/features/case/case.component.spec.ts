import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseComponent } from './case.component';
import { MaterialModule } from '../../../material.module';

describe('CaseComponent', () => {
  let component: CaseComponent;
  let fixture: ComponentFixture<CaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseComponent ],
      imports:[MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
