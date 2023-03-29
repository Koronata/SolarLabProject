import {Component, Input} from "@angular/core";
import {ICompany} from "../interface/company";

@Component({
  selector:'app-company',
  templateUrl:'company.component.html',
  styleUrls:['company.component.scss']
})
export class CompanyComponent{

  @Input() company!:ICompany

}
