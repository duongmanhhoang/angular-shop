import { Component, OnInit, Input } from '@angular/core';
import {PostDataType} from "../PostDataType";
import {PostService} from "../../services/post.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-edit-post',
  templateUrl: './admin-edit-post.component.html',
  styleUrls: ['./admin-edit-post.component.sass']
})
export class AdminEditPostComponent implements OnInit {
  @Input('edit') postData: PostDataType;
  constructor(
      private postService: PostService
  ) { }

  ngOnInit() {
  }

  update = (post) => {
    this.postService.updatePost(post).subscribe( data => {
      alert('Update thành công');
      $('.modal').hide();
      $('.modal-backdrop').hide();
    })
  };

}
