import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { Callpost } from 'src/app/models/Callpost';
import { ICalllogfrm } from 'src/app/models/ICalllogfrm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallLogFrmService {
  private _urlcalllogfrm : string = AppSettings.API_ENDPOINT_MOCK + 'mock-calllogfrm';
  
  constructor(private http : HttpClient) { }

call(calli : Callpost){
  return this.http.post<any>(this._urlcalllogfrm,calli);
  }

//for Call-log-view get method
private _urlcalllogview : string = AppSettings.API_ENDPOINT_MOCK + 'mock-calllogview';
getCallLogfrm(): Observable<ICalllogfrm>{
  const httpOutput = this.http.get<ICalllogfrm>(this._urlcalllogview);
  console.log('Reading http Call Log Data From Database');
  return httpOutput;
    }
  }