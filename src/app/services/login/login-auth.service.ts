import { Injectable } from '@angular/core';
import { AppSettings } from '../../app-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  printLogin(username: String, password: String) {
    alert(username + '::::' + password + AppSettings.API_ENDPOINT);
  }
}
