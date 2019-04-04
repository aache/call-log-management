import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { Stockitems } from 'src/app/models/Stockitems';
import { Observable } from 'rxjs';
import { IStockitems } from 'src/app/models/IStockitems';
import { ITransition } from 'src/app/models/ITransition';

@Injectable({
  providedIn: 'root'
})
export class StockItemsService {
private _urlstockitems : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-stock-items';
  constructor(private http : HttpClient) { }
  stockpost(model2 : Stockitems){
    return this.http.post<any>(this._urlstockitems,model2);
  }

/* to get data from database and display on page stock-items.html */
  private _urlstockitemsview : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-stock-items-view';
  getstockitems(): Observable<IStockitems>{
  const httpOutput = this.http.get<IStockitems>(this._urlstockitemsview);
  console.log('Reading http stock-items data from database');
  return httpOutput;
  }

  /* to DELETE data from database and display on page stock-items.html */
  private _urlstockitemsdelete : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-stock-items-del';
  deletestockitems(id): Observable<IStockitems>{
  const httpOutput = this.http.get<IStockitems>(this._urlstockitemsdelete + '?stock_id=' + id);
  console.log('Delete http stock-items data from database');
  return httpOutput;

  }

  /* To Select data from tb_transaction on select of stock-name  */
  private _urlstockitemspopupview : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-stock-items-popup-view';
  gettransaction(): Observable<ITransition>{
    const httpOutput = this.http.get<ITransition>(this._urlstockitemspopupview);
    console.log('Select http stock-items data from database');
    return httpOutput;
  }
}
