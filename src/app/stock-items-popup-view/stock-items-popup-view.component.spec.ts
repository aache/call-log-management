import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemsPopupViewComponent } from './stock-items-popup-view.component';

describe('StockItemsPopupViewComponent', () => {
  let component: StockItemsPopupViewComponent;
  let fixture: ComponentFixture<StockItemsPopupViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemsPopupViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemsPopupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
