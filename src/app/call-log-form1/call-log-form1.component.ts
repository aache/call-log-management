import { Component, OnInit, Input } from '@angular/core';
import { Callpost } from '../models/Callpost';
import { CallLogFrmService } from '../services/Call-Log-Form/call-log-frm.service';


export interface IPriority {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-call-log-form1',
  templateUrl: './call-log-form1.component.html',
  styleUrls: ['./call-log-form1.component.css']
})
export class CallLogForm1Component implements OnInit {
  @Input()
  childModel : Callpost = null ; 
  
  constructor(private callservice:CallLogFrmService) { }
  
  ngOnInit() {
    console.log(this.childModel.name) ; 
  }

}
