import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ClassDataType} from "../../classes/ClassDataType";
import {ActivatedRoute} from "@angular/router";
import {CategoryDataType} from "../CategoryDataType";

@Component({
    selector: 'app-client-categories',
    templateUrl: './client-categories.component.html',
    styleUrls: ['./client-categories.component.sass']
})
export class ClientCategoriesComponent implements OnInit {
    classes: ClassDataType[];
    category: CategoryDataType;

    constructor(
        private categoryService: CategoryService,
        private routes: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.getClasses();
        this.getCategory();
    }

    getClasses = () => {
        this.routes.params.subscribe(param => {
            this.categoryService.getClasses(param.id).subscribe(data => {
                this.classes = data;
            })
        })
    }

    getCategory = () => {
      this.routes.params.subscribe( param => {
        this.categoryService.getCategory(param.id).subscribe( data => {
          this.category = data;
        })
      })
    }
}
