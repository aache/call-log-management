import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InventoryService } from '../services/Inventory/inventory.service';
import { Transition } from '../models/Transition';
import { ITransition } from '../models/ITransition';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  fileUrl;
  data: ITransition[];
  constructor(private sanitizer: DomSanitizer,
    private service: InventoryService ) { }

    onSubmit(){

    }
  ngOnInit() {
this.service.getTransition().subscribe(
  result => {
    this.data = result;
  console.log(this.data);
    let stringData: any = '';
    this.data.forEach(function(transition) {
      stringData = stringData +
                   transition.id + ',' +
                   transition.date + ',' +
                   transition.discription + ',' +
                   transition.quantity + ',' +
                   transition.stock_id + ',' +
                   transition.stock_name + ',' +
                   transition.transition_type + ',' +
                   transition.username + ',' + '\n';
     });
    const blob = new Blob([stringData], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  });
  }

}
