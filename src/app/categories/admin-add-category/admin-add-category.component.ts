import {Component, OnInit, Input} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {CategoryDataType} from "../CategoryDataType";
import * as $ from 'jquery';

@Component({
    selector: 'app-admin-add-category',
    templateUrl: './admin-add-category.component.html',
    styleUrls: ['./admin-add-category.component.sass']
})
export class AdminAddCategoryComponent implements OnInit {
    @Input('dataCategories') categories: CategoryDataType[];
    name: string;

    constructor(
        private categoryService: CategoryService
    ) {
    }

    ngOnInit() {
    }

    add() {
        const obj = {
            name: this.name,
        };
        this.categoryService.addCategory(obj).subscribe(data => {
            this.categories.push(data);
            alert('Thêm thành công');
            $('.add-modal').hide();
            $('.modal-backdrop').hide();
        });
    }
}
