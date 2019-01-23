import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/app-settings';
import { Student } from 'src/app/models/Student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from 'src/app/models/ILogin';
@Injectable({
  providedIn: 'root'
})

export class LoginAuthService 
{
  
  private logindata;
  private _urlLogin: string = AppSettings.API_ENDPOINT_MOCK + 'mock-login-auth' ;

  constructor(private http : HttpClient) { }
  getLogin(): Observable<ILogin>{
  const httpOutput = this.http.get<ILogin>(this._urlLogin);
  this.getLogin().subscribe(data => this.logindata = data);
    console.log('Reading http output');
    return httpOutput;
  }
  
  loginAuth(u:String , p : String) : boolean
    {
      this.getLogin().subscribe(data => this.logindata = data);
      if(u == this.logindata.username && p == this.logindata.password)
      {
        return true ; 
      }

     else
        {
         return false ; 
        }
    }
  

  
   printLogin(username: String, password: String) 
    {
     console.log(username);
     console.log(password);    
    }

}


  

