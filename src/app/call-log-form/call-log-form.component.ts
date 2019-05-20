import { Component, OnInit } from '@angular/core';
import { CallLogFrmService } from '../services/Call-Log-Form/call-log-frm.service';
import { Callpost } from '../models/Callpost';
import { TicketService } from '../services/Call-Log-Form/ticket.service';

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
   isOn = true ;
   counter : number = 0 ; 
   parentModel : Callpost = null ; 
   SuccessDt :Date = null;
  constructor(private callservice:CallLogFrmService,
              private ticketService:TicketService) { 
    
  }

  next(){
    if(this.counter == 0){
      this.isOn = !this.isOn;
      this.onSubmit();
    }else if(this.counter == 1){
      this.updateCall();
    }
      this.counter++;
  }

  onSubmit(){
    //this.submitted=true;
  this.callservice.call(this.parentModel)
  .subscribe(
    data => {
              this.ticketService.storeIdInLocalStorage(data);
              this.parentModel.ticket_no = this.ticketService.getTicketFromId(this.ticketService.getIdFromLocalStorage());
            },
    error => console.log('Error!!',error)
  )}

  updateCall(){
    this.callservice.updatecall(this.parentModel)
  .subscribe(
    data => console.log('success!',data),
    error => console.log('Error!!',error)
  )
  this.SuccessDt = new Date();
  this.parentModel = new Callpost(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    1,
    null,
  );
}
  ngOnInit(){
    this.parentModel = new Callpost(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      1,
      null,
    );

  }
}
