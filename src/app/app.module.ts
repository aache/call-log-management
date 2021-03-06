import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerticalNavigationComponent } from './vertical-navigation/vertical-navigation.component';

import { DataTablesModule } from 'angular-datatables';

import { LoginAuthService } from './services/login/login-auth.service';
import { AppSettings } from './app-settings';
import { PrimaryComponent } from './dashboard/primary/primary.component';
import { GreenComponent } from './dashboard/green/green.component';
import { RedComponent } from './dashboard/red/red.component';
import { YellowComponent } from './dashboard/yellow/yellow.component';
import { PinkComponent } from './dashboard/pink/pink.component';
import { CallLogFormComponent } from './call-log-form/call-log-form.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './services/Dashboard/dashboard.service';
import { CallLogViewComponent } from './call-log-view/call-log-view.component';
import { InventoryComponent } from './inventory/inventory.component';
import { StockItemsComponent } from './stock-items/stock-items.component';
import { StockItemsPopupComponent } from './stock-items-popup/stock-items-popup.component';
import { StockItemsPopupViewComponent } from './stock-items-popup-view/stock-items-popup-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    VerticalNavigationComponent,
    PrimaryComponent,
    GreenComponent,
    RedComponent,
    YellowComponent,
    PinkComponent,
    CallLogFormComponent,
    CallLogViewComponent,
    InventoryComponent,
    StockItemsComponent,
    StockItemsPopupComponent,
    StockItemsPopupViewComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    AppSettings,
    LoginAuthService,
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
