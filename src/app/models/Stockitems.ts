import { IStockitems } from './IStockitems';

export class Stockitems implements IStockitems{
    
    constructor(
        public id:number,
        public stock_name: string,
        public quantity: number
        ){}
}