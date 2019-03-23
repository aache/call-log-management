import { Component, OnInit } from '@angular/core';
import { Itransition } from 'src/app/models/Itransition';
import { outwardpost } from '../models/outwardpost';
import { InventoryService } from '../services/Inventory/inventory.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  outwardmodel = new outwardpost('','',null ,'','','');
  inwardmodel = new outwardpost('',null,null ,null,'12-03-2019','');
  
  constructor(private service : InventoryService) { }
onAdd(){
  this.service.outwardcall(this.inwardmodel)
  .subscribe(
    data => console.log('success!',data),
    error => console.log('Error!!',error)
  )
}

  onSubmit(){
    this.service.outwardcall(this.outwardmodel)
    .subscribe(
      data => console.log('success!',data),
      error => console.log('Error!!',error)
    )
  }
  ngOnInit() {
  }

}
