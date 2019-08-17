import { Component, OnInit } from '@angular/core';
import {CategoryDataType} from "../CategoryDataType";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-admin-categories-list',
  templateUrl: './admin-categories-list.component.html',
  styleUrls: ['./admin-categories-list.component.sass']
})
export class AdminCategoriesListComponent implements OnInit {
  categories: CategoryDataType[];
  categoryData: CategoryDataType;

  constructor(
      private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories = () => {
    this.categoryService.getCategories().subscribe( data => {
      this.categories = data;
    })
  };

  edit = (category) => {
    this.categoryData = category;
  };

  confirm(id) {
    let res =  confirm('Bạn có chắc muốn xóa không');
    if (res == true) {
      this.categoryService.deleteCategory(id).subscribe(data => {
        this.categories = this.categories.filter(item => item.id !== data.id);
        alert('Xóa thành công');
      })
    } else {
      alert('Hú hồn, tưởng bị bay màu (☭ ͜ʖ ☭)')
    }
  }
}
