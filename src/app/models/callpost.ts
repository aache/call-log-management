import { ICalllogfrm } from './ICalllogfrm';

export class Callpost implements ICalllogfrm{
    constructor(
       public name : string,
       public phone_number : string,
       public time_of_call : Date,
       public vlan : string,
       public zone : string,
       public user_id : string,
       public location : string,
       public reported_by : string,
       public call_priority : number,
       public call_severity : number
    ){}
}