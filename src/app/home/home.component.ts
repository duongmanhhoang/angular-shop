import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import {PostDataType} from "../posts/PostDataType";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  posts: PostDataType[];
  constructor(
      private postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
