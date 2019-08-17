import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ActivatedRoute} from "@angular/router";
import {ClassDataType} from "../../classes/ClassDataType";


@Component({
    selector: 'app-client-detail-class',
    templateUrl: './client-detail-class.component.html',
    styleUrls: ['./client-detail-class.component.sass']
})
export class ClientDetailClassComponent implements OnInit {
    class: ClassDataType;

    constructor(
        private categoryService: CategoryService,
        private routes: ActivatedRoute
    ) {
    }

    ngOnInit() {
      this.getClass();
    }

    getClass = () => {
        this.routes.params.subscribe(param => {
            this.categoryService.getClass(param.category_id, param.class_id).subscribe(data => {
                this.class = data;
            })
        })
    }

}
