import { IStockitems } from './IStockitems';

export class Stockitems implements IStockitems{
    
    constructor(
        public stock_name: string,
        public quantity: number
        ){}
}