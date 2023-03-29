import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AdvComponent} from "./pages/adv/adv.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {CompanyComponent} from "./company/company.component";

@NgModule({
  declarations: [
    AppComponent,
    AdvComponent,
    ContactComponent,
    CatalogComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
