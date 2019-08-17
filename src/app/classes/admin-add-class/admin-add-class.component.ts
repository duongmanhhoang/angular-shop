import { Component, OnInit, Input } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ClassDataType} from "../ClassDataType";
import {ClassService} from "../../services/class.service";
import {CategoryDataType} from "../../categories/CategoryDataType";
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-add-class',
  templateUrl: './admin-add-class.component.html',
  styleUrls: ['./admin-add-class.component.sass']
})
export class AdminAddClassComponent implements OnInit {
  @Input('dataClasses') classes: ClassDataType[];
  name: string;
  categoryId: number;
  description: string;
  body: string;
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

  add() {
    const obj = {
      name: this.name,
      categoryId: this.categoryId,
      description: this.description,
      body: this.body,
    };
      this.classService.addClass(this.categoryId, obj).subscribe(data => {
        this.classes.push(data);
        alert('Thêm thành công');
        $('.add-modal').hide();
        $('body').removeClass('modal-open');
        $('body').css('padding-right', '0px');
        $('.modal-backdrop').remove();
      });
  }
}
