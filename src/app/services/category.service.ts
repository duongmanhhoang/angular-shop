import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoryDataType} from "../categories/CategoryDataType";
import {ClassDataType} from "../classes/ClassDataType";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private api: string = 'http://5d385878f898950014c52a6b.mockapi.io/api/v1';

    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<CategoryDataType[]> {
        return this.http.get<CategoryDataType[]>(`${this.api}/categories`);
    }

    getClasses(id): Observable<ClassDataType[]> {
        return this.http.get<ClassDataType[]>(`${this.api}/categories/${id}/classes`);
    }

    getCategory(id): Observable<CategoryDataType> {
        return this.http.get<CategoryDataType>(`${this.api}/categories/${id}`);
    }

    getClass(category_id, class_id): Observable<ClassDataType> {
        return this.http.get<ClassDataType>(`${this.api}/categories/${category_id}/classes/${class_id}`);
    }

    deleteCategory(id): Observable<CategoryDataType> {
        return this.http.delete<CategoryDataType>(`${this.api}/categories/${id}`);
    }

    addCategory(category): Observable<CategoryDataType> {
        return this.http.post<CategoryDataType>(`${this.api}/categories`, category);
    }

    updateCategory(category): Observable<CategoryDataType> {
        return this.http.put<CategoryDataType>(`${this.api}/categories/${category.id}`, category)
    }
}
