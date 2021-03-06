import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { ITransition } from 'src/app/models/Itransition';
import { Observable } from 'rxjs';
import { Transition } from 'src/app/models/Transition';
import { IStockitems } from 'src/app/models/IStockitems';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _urlinventory : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-inventory';
  constructor(private http : HttpClient) { }
  inwardcall( model: Transition){
    return this.http.post<any>(this._urlinventory,model);
  };
  private _urlinventoryOutward : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-inventory-out';
  outwardcall(model: Transition){
    return this.http.post<any>(this._urlinventoryOutward,model);
  };

  /*Service to view stock Items */
  private _urlstockview : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-stock-items-view';
  getstockview(): Observable<IStockitems>{
    const httpOutput = this.http.get<IStockitems>(this._urlstockview);
    console.log('Reading http stock Items From Database');
    return httpOutput;
      
  }
}
