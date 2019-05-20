import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { IDashboard} from 'src/app/models/IDashboard';
import { DashboardService } from 'src/app/services/Dashboard/dashboard.service';
@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})

export class PrimaryComponent implements OnInit {
  public primaryData:number;
  
  constructor(private primaryService:DashboardService) {   
   }
  ngOnInit() {
 this.primaryService.getPrimary().subscribe(data => this.primaryData = data.id);
  }

}

