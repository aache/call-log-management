import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';


import { LoginAuthService } from './login-auth.service';
import { AppSettings } from './app-settings';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VerticalNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginAuthService,
    AppSettings
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
