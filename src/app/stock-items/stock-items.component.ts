import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { StockItemsService } from 'src/app/services/Stock-Items/stock-items.service';

@Component({
  selector: 'app-stock-items',
  templateUrl: './stock-items.component.html',
  styleUrls: ['./stock-items.component.css']
})
export class StockItemsComponent implements OnInit {
stockload : any =[];
dtOptions: DataTables.Settings = {};
dtTrigger : Subject<any> = new Subject();

selected_stock_id : number ; 

  constructor(private stockservice : StockItemsService) { }
onDeleteclick(id){
  console .log (id);
  this.stockservice.deletestockitems(id).subscribe(data=>this.stockload.id=data.id);
  window.location.reload();
}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    
    this.stockservice.getstockitems().subscribe(result =>{
      this.stockload = result;
      this.dtTrigger.next();
    });
  }

  onShowModal(id : number){
    this.selected_stock_id = id ;
  }

}
