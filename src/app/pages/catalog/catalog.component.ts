import {Component, OnInit} from "@angular/core";
import{ICompany} from "../../interface/company";
import {CompanyService} from "../../data/companyService";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  companies: ICompany[] = []

  constructor(private _companyService: CompanyService) { }

  ngOnInit(): void {
    this._companyService.getList()
      .subscribe(response => {
        this.companies = response.data
      })
  }

}
