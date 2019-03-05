import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogViewComponent } from './call-log-view.component';

describe('CallLogViewComponent', () => {
  let component: CallLogViewComponent;
  let fixture: ComponentFixture<CallLogViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLogViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
