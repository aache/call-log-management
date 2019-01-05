import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor() { }
  printLogin(username, password) {
    console.log(username+ "::::"+ password);
  }
}
