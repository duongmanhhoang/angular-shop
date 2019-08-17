import {Component, Input, OnInit} from '@angular/core';
import {ClassDataType} from "../ClassDataType";
import {ClassService} from "../../services/class.service";
import {CategoryService} from "../../services/category.service";
import {CategoryDataType} from "../../categories/CategoryDataType";
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-edit-class',
  templateUrl: './admin-edit-class.component.html',
  styleUrls: ['./admin-edit-class.component.sass']
})
export class AdminEditClassComponent implements OnInit {
  @Input('editClassData') classData: ClassDataType;
  categories: CategoryDataType[];
  constructor(
      private classService: ClassService,
      private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories = () => {
    this.categoryService.getCategories().subscribe( data => {
      this.categories = data;
    })
  };
  update = (dataClass) => {
      this.classService.updateClass(dataClass.categoryId, dataClass).subscribe( data => {
        this.classData = data;
        alert('Update thành công');
        $('.edit-modal').hide();
        $('.modal-backdrop').hide();
      })
  };
}
