import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrimary } from 'src/app/dashboard/primary/primary';
import { Observable } from 'rxjs';

//import { HttpClient } from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class PrimaryService {
  private _url:string = "src/app/Data/primary.json";

  constructor(private http : HttpClient ) { }

  getPrimary():Observable<IPrimary[]>{
    return this.http.get<IPrimary[]>(this._url);
  }
}
