import { Injectable } from '@angular/core';
import { AppSettings } from '../../app-settings';
import { Student } from 'src/app/models/Student';
@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  loginAuth(u:String , p : String) : boolean
  {
    if(u == "roy" && p == "12345")
    {
      return true ; 
    }else {
      return false ; 
    }
}
printLogin(username: String, password: String) {
  alert(username + '::::' + password + AppSettings.API_ENDPOINT);
  console.log(username);    

}
}