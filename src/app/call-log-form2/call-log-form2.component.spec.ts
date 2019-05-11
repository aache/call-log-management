import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogForm2Component } from './call-log-form2.component';

describe('CallLogForm2Component', () => {
  let component: CallLogForm2Component;
  let fixture: ComponentFixture<CallLogForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLogForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
