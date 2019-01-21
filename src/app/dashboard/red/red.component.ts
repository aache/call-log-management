import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/Dashboard/dashboard.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
public red_data : number;
  constructor(private RedService : DashboardService) { }

  ngOnInit() {
    this.RedService.getRed().subscribe(data => this.red_data = data.id);
  }

}
