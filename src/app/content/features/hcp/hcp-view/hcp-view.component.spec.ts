import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcpViewComponent } from './hcp-view.component';

describe('HcpViewComponent', () => {
  let component: HcpViewComponent;
  let fixture: ComponentFixture<HcpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
