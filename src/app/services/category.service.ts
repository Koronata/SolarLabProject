import { Injectable } from '@angular/core';
import {Category} from "../shared/entities/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  category:Category|undefined;
  constructor() { }

}
