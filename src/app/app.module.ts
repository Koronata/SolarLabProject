import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {AdvertisementComponent } from './advertisement/advertisement.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchComponent } from './shared/components/search/search.component';
import { CardComponent } from './shared/components/card/card.component';
import { RecAdsComponent } from './pages/rec-ads/rec-ads.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { CurrencyFormatPipePipe } from './pipes/currency-format.pipe.pipe';
import {FormsModule} from "@angular/forms";
import { MyAdvsComponent } from './pages/my-advs/my-advs.component';
import { CreateAdvComponent } from './pages/create-adv/create-adv.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ModalRegistrationComponent } from './shared/components/modal-registration/modal-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    RecAdsComponent,
    GalleryComponent,
    CurrencyFormatPipePipe,
    MyAdvsComponent,
    CreateAdvComponent,
    SettingsComponent,
    ModalRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
