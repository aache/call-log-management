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
  
  constructor(private service : InventoryService) { }


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
