import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { ITransition } from 'src/app/models/Itransition';
import { Observable } from 'rxjs';
import { Transition } from 'src/app/models/Transition';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _urlinventory : string = AppSettings.API_ENDPOINT_INVENTORY + 'mock-inventory';
  constructor(private http : HttpClient) { }
  inwardcall( model: Transition){
    return this.http.post<any>(this._urlinventory,model);
  };

  outwardcall(model: Transition){
    return this.http.post<any>(this._urlinventory,model);
  };
}
