import { Component, OnInit, ViewChild } from '@angular/core';
import { toObservable } from '@angular/forms/src/validators';
import { CallLogFrmService } from '../services/Call-Log-Form/call-log-frm.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@Component({
  selector: 'app-call-log-view',
  templateUrl: './call-log-view.component.html',
  styleUrls: ['./call-log-view.component.css']
})
export class CallLogViewComponent implements OnInit {


Load :any =[];
dtOptions: DataTables.Settings = {};
dtTrigger : Subject<any> = new Subject();

  constructor(private CallService : CallLogFrmService ) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    //to get data from database
    this.CallService.getCallLogfrm().subscribe(result =>{
      this.Load = result;
      this.dtTrigger.next();
      
    });
  }

}
