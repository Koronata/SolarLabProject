import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ICompanyResponse } from '../interface/company-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor( private _http: HttpClient ) { }

  getList():Observable<ICompanyResponse>{
    return this._http.get<ICompanyResponse>('https://fakerapi.it/api/v1/companies?_quantity=1\n')
  }
}

export class ProductsService {
}
