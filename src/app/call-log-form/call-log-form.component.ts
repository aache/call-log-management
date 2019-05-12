import { Component, OnInit } from '@angular/core';
import { CallLogFrmService } from '../services/Call-Log-Form/call-log-frm.service';
import { Callpost } from '../models/Callpost';

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
  constructor(private callservice:CallLogFrmService) { 
    
  }

  next(){
    if(this.counter==0){
      this.isOn = !this.isOn;
      this.onSubmit();
    }
    this.counter++;
     
  }

  onSubmit(){
    //this.submitted=true;
  this.callservice.call(this.parentModel)
  //this.callservice.updatecall(this.parentModel)
  .subscribe(
    data => console.log('success!',data),
    error => console.log('Error!!',error)

  )}

  upcall(){
    this.callservice.updatecall(this.parentModel)
  .subscribe(
    data => console.log('success!',data),
    error => console.log('Error!!',error)

  )}
  ngOnInit(){
    this.parentModel = new Callpost(
      '',
      null,
      null,
      null,
      null,
      'dan',
      1,
      null,
    );

  }
}
