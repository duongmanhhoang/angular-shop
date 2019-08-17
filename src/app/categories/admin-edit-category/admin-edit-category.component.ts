import {Component, Input, OnInit} from '@angular/core';
import {CategoryDataType} from "../CategoryDataType";
import {CategoryService} from "../../services/category.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-edit-category',
  templateUrl: './admin-edit-category.component.html',
  styleUrls: ['./admin-edit-category.component.sass']
})
export class AdminEditCategoryComponent implements OnInit {
  @Input('editCategoryData') categoryData: CategoryDataType;
  constructor(
      private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

  update = (category) => {
    this.categoryService.updateCategory(category).subscribe( data => {
      alert('Update thành công');
      $('.modal').hide();
      $('.modal-backdrop').hide();
    })
  };

}
