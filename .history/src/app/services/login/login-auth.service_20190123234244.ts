import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { Student } from 'src/app/models/Student';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { ILogin } from 'src/app/models/ILogin';
@Injectable({
  providedIn: 'root'
})

export class LoginAuthService 
{
  
  private logindata;
  private _urlLogin: string = AppSettings.API_ENDPOINT_MOCK + 'mock-login-auth' ;

  constructor(private http: HttpClient) { }
  getLogin(): Observable<ILogin>{
  const httpOutput = this.http.get<ILogin>(this._urlLogin);
    return httpOutput;
  }
  loginAuth(u: String, p: String): boolean {
      let returnValue: boolean ;
      this.getLogin().subscribe(data => {
        this.logindata = data;
        console.log(this.logindata);
        if (this.logindata.username.includes(u) && this.logindata.password.includes(p)) {
          returnValue =  true ;
        } else {
           returnValue = false;
          }
      });

      return new Observable.of(returnValue); 
    }
    printLogin(username: String, password: String) {
     console.log(username);
     console.log(password);
    }

}


  

