import { Component, OnInit } from '@angular/core';
import { PrimaryService } from 'src/app/services/Dashboard/primary.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  public primary= [];
  constructor(private primaryService: PrimaryService) {

   }

  ngOnInit() {

    this.primaryService.getPrimary()
    .subscribe(data => this.primary = data);
    console.log(this.primary) ;
  }

}
