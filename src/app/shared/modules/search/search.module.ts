import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search.component";
import {FormsModule} from "@angular/forms";
import {CascadeSelect, CascadeSelectModule} from "primeng/cascadeselect";



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CascadeSelectModule,
  ],
  exports:[
    SearchComponent
  ]
})
export class SearchModule { }
