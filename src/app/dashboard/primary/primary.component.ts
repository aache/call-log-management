import { Component, OnInit } from '@angular/core';
import { PrimaryService } from 'src/app/services/Dashboard/primary.service';
import { HttpClient } from '@angular/common/http';
import { IPrimary } from './primary';
@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  //I WANT TO CALL{{primary.data}}
  //interface is in /dashboard/primary/primary.ts 
  //data file is in /assets/Data/primary.json
  //services is in services/dashboard/primary.service.ts
  styleUrls: ['./primary.component.css']
})

export class PrimaryComponent implements OnInit {
  public primaryData:number;
  
  constructor(private primaryService:PrimaryService) {
    
   }

 
  ngOnInit() {
 this.primaryService.getPrimary().subscribe(data => {
      this.primaryData = data.id; 
 });
  }

}

