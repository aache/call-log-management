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
  outwardmodel = new Transition(null,1,'','' ,null,'',null,'');
  inwardmodel = new Transition(null,1,'',null ,null,'',null,'');
 
  constructor(private service : InventoryService) { }
  onInwardClick(){
  this.service.inwardcall(this.inwardmodel)
  .subscribe(
    data => console.log('success!',data),
    error => console.log('Error!!',error)
  )
  window.location.reload();
}

  onOutwardClick(){
    this.service.outwardcall(this.outwardmodel)
    .subscribe(
      data => console.log('success!',data),
      error => console.log('Error!!',error)
    )
    window.location.reload();
  }
   ngOnInit() {
     //to get data from database
   this.service.getstockview().subscribe()
  }

}
