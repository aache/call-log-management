import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.f.username.value);
    console.log(this.f.password.value);
    this.submitted = true ;

    // stop here if form is invalid
      if (this.loginForm.invalid) {
        return;
      }
  }
}
