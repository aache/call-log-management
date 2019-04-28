import { Component, OnInit } from '@angular/core';
import { StockItemsService } from 'src/app/services/Stock-Items/stock-items.service';
import { Stockitems } from 'src/app/models/Stockitems';

@Component({
  selector: 'app-stock-items-popup',
  templateUrl: './stock-items-popup.component.html',
  styleUrls: ['./stock-items-popup.component.css']
})
export class StockItemsPopupComponent implements OnInit {
  stockmodel = new Stockitems(null, '', null);
  constructor(private ser: StockItemsService) { }
  onStockClick() {
    console.log("Stock Model %o" , this.stockmodel);
    this.ser.stockpost(this.stockmodel)
    .subscribe(
      data => console.log('success!', data),
      error => console.log('Error!!', error)
    );
      window.location.reload();
  }
  ngOnInit() {
  }

}
