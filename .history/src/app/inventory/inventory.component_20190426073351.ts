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
  constructor(private service: InventoryService, private stockservice: StockItemsService) { }
  onInwardClick() {
//    this.inwardmodel.stock_id = this.stockload;
  this.service.inwardcall(this.inwardmodel)
  .subscribe(
    data => console.log('success!', data),
    error => console.log('Error!!', error)
  );
  location.reload();
}

  onOutwardClick() {
  //  this.outwardmodel.stock_id = this.stockload;
    this.service.outwardcall(this.outwardmodel)
    .subscribe(
      data => location.reload(),
      error => console.log('Error!!', error)
    );
    location.reload();
  }
   ngOnInit() {
   // to get data from database
   this.service.getstockview().subscribe();
   this.stockservice.getstockitems().subscribe(result =>{
    this.stockload = result;
    console.log(result);
   });
  }
}
