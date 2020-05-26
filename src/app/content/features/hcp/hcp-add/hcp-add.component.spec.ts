import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpAddComponent } from './hcp-add.component';

describe('HcpAddComponent', () => {
  let component: HcpAddComponent;
  let fixture: ComponentFixture<HcpAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcpAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
