import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { StockItemsService } from '../services/Stock-Items/stock-items.service';

@Component({
  selector: 'app-stock-items-popup-view',
  templateUrl: './stock-items-popup-view.component.html',
  styleUrls: ['./stock-items-popup-view.component.css']
})
export class StockItemsPopupViewComponent implements OnInit {
transaction: any;

@Input()
stock_id : number ;


  constructor(private stockservice : StockItemsService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log('Stock ID :::' + this.stock_id);
    if(this.stock_id !== undefined && !isNaN(this.stock_id)){
      this.stockservice.gettransaction(this.stock_id).subscribe(data => {
        this.transaction = data;
      });
    }
  }
}
