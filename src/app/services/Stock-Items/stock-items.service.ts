import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { Stockitems } from 'src/app/models/Stockitems';

@Injectable({
  providedIn: 'root'
})
export class StockItemsService {
private _urlstockitems : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-stock-items';
  constructor(private http : HttpClient) { }
  stockpost(model2 : Stockitems){
    return this.http.post<any>(this._urlstockitems,model2);
  }
}
