import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {SettingsComponent} from "./pages/settings/settings.component";
import {CreateAdvComponent} from "./pages/create-adv/create-adv.component";
import {MyAdvsComponent} from "./pages/my-advs/my-advs.component";
import {RecAdsComponent} from "./pages/rec-ads/rec-ads.component";




const routes: Routes = [
  {path: 'settings', component:SettingsComponent},
  {path: 'create-adv', component:CreateAdvComponent},
  {path: 'my-advs', component:MyAdvsComponent},
  {path: 'rec-ads', component:RecAdsComponent}
]


@NgModule({
  imports:[RouterModule.forRoot( routes )],
  exports:[RouterModule]
})

export class AppRoutingModule{}
