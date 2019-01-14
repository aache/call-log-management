import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallLogFormComponent } from './call-log-form/logform.component';

const routes: Routes = [
  {path: 'dashboard' , component: DashboardComponent},
  {path: '' , component: LoginComponent},
  {path: 'call-log-form' , component: CallLogFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
