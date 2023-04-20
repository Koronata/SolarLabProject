import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {CardModule} from "../card/card.module";



@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports:[
    GalleryComponent
  ]
})
export class GalleryModule { }
