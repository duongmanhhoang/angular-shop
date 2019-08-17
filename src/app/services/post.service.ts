import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostDataType} from "../posts/PostDataType";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private api: string = 'http://5d385878f898950014c52a6b.mockapi.io/api/v1';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostDataType[]> {
    return this.http.get<PostDataType[]>(`${this.api}/posts`);
  }

  getPost(id): Observable<PostDataType> {
    return this.http.get<PostDataType>(`${this.api}/posts/${id}`);
  }

  updatePost(post): Observable<PostDataType> {
    return this.http.put<PostDataType>(`${this.api}/posts/${post.id}`, post);
  }

  addPost(post): Observable<PostDataType> {
    return this.http.post<PostDataType>(`${this.api}/posts`, post)
  }

  deletePost(id): Observable<PostDataType> {
    return this.http.delete<PostDataType>(`${this.api}/posts/${id}`);
  }
}
