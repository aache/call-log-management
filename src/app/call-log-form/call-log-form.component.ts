import { Component, OnInit } from '@angular/core';
import { CallLogFrmService } from '../services/Call-Log-Form/call-log-frm.service';
import { callpost } from '../models/callpost';

export interface IPriority {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-logform',
  templateUrl: './call-log-form.component.html',
  styleUrls: ['./call-log-form.component.css'],
  providers :[CallLogFrmService]
})
export class CallLogFormComponent implements OnInit {
  callpostmodel = new callpost('','','','','','','','',1,1);
  
  constructor(private callservice:CallLogFrmService) { 
  }
  //submitted = false;

              onSubmit(){
                //this.submitted=true;
              this.callservice.call(this.callpostmodel)
              
              .subscribe(
                data => console.log('success!',data),
                error => console.log('Error!!',error)
     
              )
              return confirm('Do you really want to submit the form?');
              
            }
  ngOnInit() {
  }
}
