import {Component, OnInit} from '@angular/core';
import {CategoryShortDto} from "../../entities/category/categoryShortDto";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  public categoryList: CategoryShortDto[]=[];

  constructor(private categoryService:CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategoryList().subscribe((data: CategoryShortDto[]) => this.categoryList = data);
  }


}
