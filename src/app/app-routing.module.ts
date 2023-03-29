import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvComponent } from "../app/pages/adv/adv.component";
import { CatalogComponent } from "../app/pages/catalog/catalog.component";
import { ContactComponent } from "../app/pages/contact/contact.component";


const routes: Routes = [
  {path: 'adv', component: AdvComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'contact', component: ContactComponent},
]


@NgModule({
  imports:[RouterModule.forRoot( routes )],
  exports:[RouterModule]
})

export class AppRoutingModule{}
