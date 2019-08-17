import {Component, OnInit} from '@angular/core';
import {ClassDataType} from "../ClassDataType";
import {ClassService} from "../../services/class.service";
import {CategoryService} from "../../services/category.service";
import {CategoryDataType} from "../../categories/CategoryDataType";

@Component({
    selector: 'app-admin-list-class',
    templateUrl: './admin-list-class.component.html',
    styleUrls: ['./admin-list-class.component.sass']
})
export class AdminListClassComponent implements OnInit {
    categories: CategoryDataType[];
    classes: ClassDataType[];
    classData: ClassDataType;

    constructor(
        private classService: ClassService,
        private categoryService: CategoryService,
    ) {
    }

    ngOnInit() {
        this.getClasses();
    }

    edit = (data) => {
        this.classData = data;
    };

    confirm(id, category_id) {
        let res = confirm('Bạn có chắc muốn xóa không');
        if (res == true) {
                this.classService.deleteClass(category_id, id).subscribe(data => {
                    this.classes = this.classes.filter(item => item.id !== data.id);
                    alert('Xóa thành công');
                })
        } else {
            alert('Hú hồn, tưởng bị bay màu (☭ ͜ʖ ☭)')
        }
    }

    getClasses = () => {
        this.categoryService.getCategories().subscribe(dataCategory => {
            this.categories = dataCategory;
            for (let category of this.categories) {
                this.classService.getClasses(category.id).subscribe( dataClass => {
                  if (typeof(this.classes) == 'undefined') {
                    this.classes = dataClass;
                  } else {
                    this.classes = this.classes.concat(dataClass);
                  }
                })
            }
        });
    }
}
