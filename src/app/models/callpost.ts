import { ICalllogfrm } from './ICalllogfrm';

export class Callpost implements ICalllogfrm{

    constructor(
        public name : string,
        public phone_number : string,
        public time_of_call : Date,
        public user_id : string,
        public location : string,
        public assigned_to: string,
        public call_priority : number,
        public ticket_no : string,
    ){}
}