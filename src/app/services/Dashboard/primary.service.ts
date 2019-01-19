import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrimary } from 'src/app/dashboard/primary/primary';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app-settings';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrimaryService {

  private _url: string = AppSettings.API_ENDPOINT_MOCK + 'mock-primary' ;   
  constructor(private http : HttpClient ) { }
  getPrimary(): Observable<IPrimary>{
    
    const httpOutput = this.http.get<IPrimary>(this._url);

    console.log('Reading http output');
    return httpOutput;
  }

}
