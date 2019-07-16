import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InventoryService } from '../services/Inventory/inventory.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  fileUrl;
  data ;
  constructor(private sanitizer: DomSanitizer,
    private service : InventoryService ) { }

    onSubmit(){

    }
  ngOnInit() {
this.service.getTransition().subscribe(
  result =>{
    this.data = result;
  console.log(this.data);
    const blob = new Blob([this.data], { type: 'application/octet-stream' });
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  });
  }

}
