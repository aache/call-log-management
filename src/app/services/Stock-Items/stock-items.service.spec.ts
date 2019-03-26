import { TestBed } from '@angular/core/testing';

import { StockItemsService } from './stock-items.service';

describe('StockItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockItemsService = TestBed.get(StockItemsService);
    expect(service).toBeTruthy();
  });
});
