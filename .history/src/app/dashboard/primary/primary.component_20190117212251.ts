import { Component, OnInit } from '@angular/core';
import { PrimaryService } from 'src/app/services/Dashboard/primary.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  //I WANT TO CALL{{primary.data}}
  //interface is in /dashboard/primary/primary.ts
  //data file is in /Data/primary.json
  //services is in services/dashboard/primary.service.ts
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  public primary = [];
  constructor(private primaryService:PrimaryService) {

   }

  ngOnInit() {
    this.primaryService.getPrimary()
    .subscribe(data => this.primary = data);

  }

}
