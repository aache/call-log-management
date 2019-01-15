import { Injectable } from '@angular/core';
import { AppSettings } from '../../app-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  loginAuth(u:String , p : String) : boolean
  {
      if(u == "usama" && p == "quraishi")
      {
        return true ; 
      }else {
        return false ; 
      }
  }
  printLogin(username: String, password: String) {
    alert(username + '::::' + password + AppSettings.API_ENDPOINT);
  }
}
