import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogForm1Component } from './call-log-form1.component';

describe('CallLogForm1Component', () => {
  let component: CallLogForm1Component;
  let fixture: ComponentFixture<CallLogForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLogForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
