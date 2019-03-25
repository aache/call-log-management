import { ITransition } from './ITransition';

export class Transition implements ITransition{
        constructor(
      public id: number,
      public   stock_id : number ,
      public   username : string,
      public   quantity : number,
      public   transition_type : string,
      public   date : Date,
      public  discription : string
    
    ){}
}