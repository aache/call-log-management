import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { ITransition } from 'src/app/models/ITransition';
import { Observable } from 'rxjs';
import { Transition } from 'src/app/models/Transition';
import { IStockitems } from 'src/app/models/IStockitems';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _urlinventory: string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-inventory';
  private _urlinventoryOutward: string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-inventory-out';
  private _urlstockview: string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-stock-items-view';
  private _urltransition: string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-transition-report';

  constructor(private http: HttpClient) { }
  
  inwardCall( model: Transition){
    return this.http.post<any>(this._urlinventory,model);
  };
  outwardCall(model: Transition){
    return this.http.post<any>(this._urlinventoryOutward,model);
  };
  /*Service to view stock Items */
  getStockView(): Observable<IStockitems>{
    const httpOutput = this.http.get<IStockitems>(this._urlstockview);
    console.log('Reading http stock Items From Database');
    return httpOutput;
  };

  /*Service to get data from tb_transition to report */
  getTransition(): Observable<ITransition[]>{
  const httpOutput = this.http.get<ITransition[]>(this._urltransition);
  console.log('Select http stock-items data from database');
    return httpOutput;
}
}
