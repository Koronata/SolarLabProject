import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecAdsComponent } from './rec-ads.component';
import {HeaderModule} from "../../shared/modules/header/header.module";
import {SearchComponent} from "../../shared/modules/search/search.component";
import {SearchModule} from "../../shared/modules/search/search.module";
import {GalleryModule} from "../../shared/modules/gallery/gallery.module";



@NgModule({
  declarations: [
    RecAdsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SearchModule,
    GalleryModule
  ],
  exports:[
    RecAdsComponent
  ]
})
export class RecAdsModule { }
