import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { Itransition } from 'src/app/models/Itransition';
import { Observable } from 'rxjs';
import { outwardpost } from 'src/app/models/outwardpost';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _urlinventory : string = AppSettings.API_ENDPOINT_MOCK + 'mock-inventory';
  constructor(private http : HttpClient) { }

  outwardcall(outward : outwardpost){
    return this.http.post<any>(this._urlinventory,outward);
  };
}
