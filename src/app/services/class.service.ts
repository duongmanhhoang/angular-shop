import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassDataType} from "../classes/ClassDataType";

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private api: string = 'http://5d385878f898950014c52a6b.mockapi.io/api/v1';
  constructor(
      private http: HttpClient
  ) { }

  getClasses(category_id): Observable<ClassDataType[]> {
    return this.http.get<ClassDataType[]>(`${this.api}/categories/${category_id}/classes`);
  }

  addClass(id, data): Observable<ClassDataType> {
    return this.http.post<ClassDataType>(`${this.api}/categories/${id}/classes`, data);
  }

  updateClass(category_id, data): Observable<ClassDataType> {
    return this.http.put<ClassDataType>(`${this.api}/categories/${category_id}/classes/${data.id}`, data);
  }

  deleteClass(category_id, class_id): Observable<ClassDataType> {
    return this.http.delete<ClassDataType>(`${this.api}/categories/${category_id}/classes/${class_id}`);
  }
}
