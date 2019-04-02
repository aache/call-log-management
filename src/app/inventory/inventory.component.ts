import { Component, OnInit } from '@angular/core';
import { Transition } from '../models/Transition';
import { InventoryService } from '../services/Inventory/inventory.service';
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
}

  onOutwardClick(){
    this.service.outwardcall(this.outwardmodel)
    .subscribe(
      data => console.log('success!',data),
      error => console.log('Error!!',error)
    )
  }
   ngOnInit() {
  }

}
