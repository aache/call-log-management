import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallLogFormComponent } from './call-log-form/call-log-form.component';
import { CallLogViewComponent } from './call-log-view/call-log-view.component';

const routes: Routes = [
  {path: 'dashboard' , component: DashboardComponent},
  {path: '' , component: LoginComponent},
  {path: 'call-log-form' , component: CallLogFormComponent},
  {path: 'call-log-view' , component: CallLogViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
