import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDashboard } from 'src/app/models/IDashboard';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private _url: string = AppSettings.API_ENDPOINT_MOCK + 'mock-primary' ;
  constructor(private http : HttpClient) { }
  getPrimary(): Observable <IDashboard>{
    const httpOutput = this.http.get<IDashboard>(this._url);

    console.log('Reading http output');
    return httpOutput;
  }
  private _urlgreen: string = AppSettings.API_ENDPOINT_MOCK + 'mock-green';
  getGreen(): Observable<IDashboard>{
    const httpOutput = this.http.get<IDashboard>(this._urlgreen);
    console.log('Reading http green o/p');
    return httpOutput;
  }

  private _urlyellow: string = AppSettings.API_ENDPOINT_MOCK + 'mock-yellow';
  getYellow(): Observable<IDashboard>{
    const httpOutput = this.http.get<IDashboard>(this._urlyellow);
    console.log('Reading http yellow o/p ');
    return httpOutput;
  }

  private _urlred: string = AppSettings.API_ENDPOINT_MOCK + 'mock-red';
  getRed(): Observable<IDashboard>{
    const httpOutput = this.http.get<IDashboard>(this._urlred);
    console.log('Reading http red o/p ');
    return httpOutput;
  }



}
