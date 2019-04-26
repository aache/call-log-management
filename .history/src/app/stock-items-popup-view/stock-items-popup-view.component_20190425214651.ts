import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { StockItemsService } from '../services/Stock-Items/stock-items.service';

@Component({
  selector: 'app-stock-items-popup-view',
  templateUrl: './stock-items-popup-view.component.html',
  styleUrls: ['./stock-items-popup-view.component.css']
})
export class StockItemsPopupViewComponent implements OnInit {
transaction : any=[];

@Input()
stock_id : number ;


  constructor(private stockservice : StockItemsService) { }

  ngOnInit() {
   
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
    }
    this.stockservice.gettransaction(this.stock_id).subscribe(data=>{this.transaction=data;
     // console.log(data)
    }); 
  }


  
}
