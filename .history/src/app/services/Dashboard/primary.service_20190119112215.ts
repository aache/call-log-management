import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPrimary } from 'src/app/dashboard/primary/primary';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimaryService {
  private _url: string = "/assets/Data/primary.json";
  constructor(private http : HttpClient ) { }
  getPrimary():Observable<IPrimary[]>{
    let httpOutput = this.http.get<IPrimary[]>(this._url);
    console.log ("Reading http output") ;
    console.Console.log (httpOutput) ;    
    return httpOutput; 
  }

}
