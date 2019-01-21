import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/Dashboard/dashboard.service';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {
public green_data:number;

  constructor(private GreenService:DashboardService) { }

  ngOnInit() {
    this.GreenService.getGreen().subscribe(data =>this.green_data = data.id)
  }

}
