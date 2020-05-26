import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpEditComponent } from './hcp-edit.component';

describe('HcpEditComponent', () => {
  let component: HcpEditComponent;
  let fixture: ComponentFixture<HcpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
