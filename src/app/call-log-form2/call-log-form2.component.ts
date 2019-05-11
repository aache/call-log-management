import { Component, OnInit, Input } from '@angular/core';
import { Callpost } from '../models/Callpost';
import { CallLogFrmService } from '../services/Call-Log-Form/call-log-frm.service';

@Component({
  selector: 'app-call-log-form2',
  templateUrl: './call-log-form2.component.html',
  styleUrls: ['./call-log-form2.component.css']
})
export class CallLogForm2Component implements OnInit {
  @Input()
  childModel : Callpost = null ; 

  constructor(private callservice:CallLogFrmService) { }

  ngOnInit() {
    console.log(this.childModel.name) ; 
  }

}
