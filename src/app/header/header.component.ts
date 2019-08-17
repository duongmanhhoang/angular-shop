import { Component, OnInit } from '@angular/core';
import {CategoryDataType} from "../categories/CategoryDataType";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  categories: CategoryDataType[];
  constructor(
      private categoryService: CategoryService,

  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories = () => {
    return this.categoryService.getCategories().subscribe( data => {
      this.categories = data;
    })
  }
}
