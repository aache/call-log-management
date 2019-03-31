import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsPopupComponent } from './stock-items-popup.component';

describe('StockItemsPopupComponent', () => {
  let component: StockItemsPopupComponent;
  let fixture: ComponentFixture<StockItemsPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemsPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
