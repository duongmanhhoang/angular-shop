import { Component, OnInit, Input } from '@angular/core';
import {PostService} from "../../services/post.service";
import {PostDataType} from "../PostDataType";
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.sass']
})
export class AdminAddPostComponent implements OnInit {
  @Input('data') posts: PostDataType[];
  title: string;
  description: string;
  body: string;
  constructor(
      private postService: PostService
  ) { }

  ngOnInit() {
  }

  add() {
    const obj = {
      title: this.title,
      description: this.description,
      body: this.body
    };
    this.postService.addPost(obj).subscribe(data => {
      this.posts.push(data);
      alert('Thêm thành công');
      $('.add-modal').hide();
      $('.modal-backdrop').hide();
    });
  }
}
