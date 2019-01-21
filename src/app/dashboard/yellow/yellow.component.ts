import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/Dashboard/dashboard.service';
import { IDashboard } from 'src/app/models/Idashboard';

@Component({
  selector: 'app-yellow',
  templateUrl: './yellow.component.html',
  styleUrls: ['./yellow.component.css']
})
export class YellowComponent implements OnInit {
public yellow_data : number;
  constructor(private YellowService : DashboardService) { }

  ngOnInit() {
    this.YellowService.getYellow().subscribe(data => this.yellow_data = data.id);
  }

}
