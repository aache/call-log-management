import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CallLogFormComponent } from './call-log-form/call-log-form.component';
import { CallLogViewComponent } from './call-log-view/call-log-view.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StockItemsComponent } from './stock-items/stock-items.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { CallLogForm1Component } from './call-log-form1/call-log-form1.component';
import { CallLogForm2Component } from './call-log-form2/call-log-form2.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'dashboard' , component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: '' , component: LoginComponent},
  {path: 'call-log-form' , component: CallLogFormComponent, canActivate: [AuthGuardService]},
  {path: 'call-log-view' , component: CallLogViewComponent, canActivate: [AuthGuardService]},
  {path: 'inventory' , component: InventoryComponent, canActivate: [AuthGuardService]},
  {path: 'stock-items' , component: StockItemsComponent, canActivate: [AuthGuardService]},
  {path: 'call-log-form1' , component: CallLogForm1Component},
  {path: 'call-log-form2' , component: CallLogForm2Component},
  {path: 'report' , component: ReportComponent ,canActivate: [AuthGuardService]},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
