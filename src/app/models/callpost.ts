export class callpost {
    constructor(
       public name : string,
       public phone_number : string,
       public time_of_call : string,
       public location : string,
       public reported_by : string,
       public call_priority : number,
       public call_severity : number
    ){}
}