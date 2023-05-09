import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {AdvertisementShortDto} from "../shared/entities/advertisement/advertisementShortDto";
import {CategoryShortDto} from "../shared/entities/category/categoryShortDto";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public getCategoryList(){
    return this.http.get('http://90.156.209.122:5000/Category').pipe(map((data: any) => {
      return data.map(function (categoryShortDto: CategoryShortDto): CategoryShortDto {
        return new CategoryShortDto(categoryShortDto.id, categoryShortDto.parentId, categoryShortDto.name, categoryShortDto.isActive);
      });
    }));
  }
}
