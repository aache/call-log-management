import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogFormComponent } from './call-log-form.component';

describe('LogformComponent', () => {
  let component: CallLogFormComponent;
  let fixture: ComponentFixture<CallLogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallLogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
