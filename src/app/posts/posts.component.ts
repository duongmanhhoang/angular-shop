import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {PostDataType} from "./PostDataType";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts: PostDataType[];
  constructor(
      private postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts = () => {
    return this.postService.getPosts().subscribe( data => {
      this.posts = data;
    });
  }

}
