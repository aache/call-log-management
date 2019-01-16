import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginAuthService } from '../services/login/login-auth.service';
import { AppSettings } from '../app-settings';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginAuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private loginAuthService:LoginAuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }
  

  validate() {
    this.submitted = true ;

    // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }
      this.loginAuthService.printLogin(this.f.username.value, this.f.password.value);
      if(this.loginAuthService.loginAuth(this.f.username.value,this.f.password.value))
      {
        window.location.href = AppSettings.PROTOCOL+'://'+AppSettings.HOST+':'+AppSettings.PORT+'/dashboard';
      }else{
        alert("FAILURE");
      }
  }
}