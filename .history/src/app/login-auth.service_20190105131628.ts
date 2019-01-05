import { Injectable } from '@angular/core';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  printLogin(username, password) {
    console.log(username+ "::::"+ password + AppSettings.API_ENDPOINT);
  }
}
