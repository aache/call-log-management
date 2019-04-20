import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginAuthService } from './login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _loginAuthService: LoginAuthService) { }
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  clear(){
    localStorage.clear();
  }

  isAuthenticated(): Observable<boolean> | boolean {
    if (this.get('user') != null) {
      return this._loginAuthService.loginAuth(this.get('user').username , this.get('user').password);
    } else {
      return false;
    }
  }
}
