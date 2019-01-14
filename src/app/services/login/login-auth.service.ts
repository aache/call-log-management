import { Injectable } from '@angular/core';
import { AppSettings } from '../../app-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  LoginAuth()
  {
      var username = loginform.username.value;
      var password = loginform.password.value;
      if(username != "usama" || password != "quraishi")
      {
        alert("Invalid username and password")
        return;
      }
      if(username != "usama" )
      {
        alert("Invalid username ")
        return;
      }
      if( password != "quraishi")
      {
        alert("Invalid  password")
        return;
      }
  }
  printLogin(username: String, password: String) {
    alert(username + '::::' + password + AppSettings.API_ENDPOINT);
  }
}
