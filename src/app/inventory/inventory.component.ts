import { Component, OnInit } from '@angular/core';
import { Transition } from '../models/Transition';
import { InventoryService } from '../services/Inventory/inventory.service';
import { StockItemsService } from '../services/Stock-Items/stock-items.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  outwardmodel = new Transition(null, null, '', '' , null, '', null, '');
  inwardmodel = new Transition(null, null, '', null , null, '', null, '');
  stockload: any = [];
  errPlsSelectItem : boolean = false ; 
  errInvalidQty : boolean = false ; 
  inwardSuccessDt :Date = null;
  outwardSuccessDt :Date = null;
  constructor(private service: InventoryService, private stockservice: StockItemsService) { }
  onInwardClick() {
//    this.inwardmodel.stock_id = this.stockload;
  this.service.inwardCall(this.inwardmodel)
  .subscribe(
    data => {console.log('inward success');},
    error => console.log('inward Error!!', error)
  ); 
  this.inwardmodel = new Transition(null, null, '', null , null, '', null, '');
  this.inwardSuccessDt = new Date();
}

  onOutwardClick(stock_id : number) {
    if(stock_id == null){
      this.errPlsSelectItem = true ;
      (<HTMLInputElement>document.getElementById('outQuantity')).value = ''; 
    }
    else{
        this.errPlsSelectItem = false ;
        console.log("Check existing quantity for stock id " + stock_id);
        this.stockservice.getStockQty(stock_id).subscribe(result =>{
        let currentQty = (<HTMLInputElement>document.getElementById('outQuantity')).value ; 
        console.log("Current Qty :: " + currentQty);
        console.log("Database Result :: " + result);
            if(parseInt(currentQty) > parseInt(result)){
              this.errInvalidQty = true ; 
              (<HTMLInputElement>document.getElementById('outQuantity')).value = '';
            }else {
              console.log("Quantity is valid");
              this.errInvalidQty = false ;
              this.service.outwardCall(this.outwardmodel)
              .subscribe(
                data => {console.log('outwawrd success');this.outwardSuccessDt = new Date();},
                error => console.log('inward Error!!', error)
              );
              this.outwardmodel = new Transition(null, null, '', '' , null, '', null, '');
              this.outwardSuccessDt = new Date();
            }
       });
    }
  }
   ngOnInit() {
   // to get data from database
   this.service.getStockView().subscribe();
   this.stockservice.getStockItems().subscribe(result =>{
    this.stockload = result;
    console.log(result);
   });
  }
}
