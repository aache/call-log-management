import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { callpost } from 'src/app/models/callpost';

@Injectable({
  providedIn: 'root'
})
export class CallLogFrmService {
  private _urlcalllogfrm : string = AppSettings.API_ENDPOINT_MOCK + 'mock-calllogfrm';
  constructor(private http : HttpClient) { }

call(calli : callpost){
  return this.http.post<any>(this._urlcalllogfrm,calli);
}
}
