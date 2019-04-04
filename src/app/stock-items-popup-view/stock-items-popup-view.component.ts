import { Component, OnInit } from '@angular/core';
import { StockItemsService } from '../services/Stock-Items/stock-items.service';

@Component({
  selector: 'app-stock-items-popup-view',
  templateUrl: './stock-items-popup-view.component.html',
  styleUrls: ['./stock-items-popup-view.component.css']
})
export class StockItemsPopupViewComponent implements OnInit {
transaction : any=[];
  constructor(private stockservice : StockItemsService) { }

  ngOnInit() {
    this.stockservice.gettransaction().subscribe(data=>{this.transaction=data;});
  }

}
