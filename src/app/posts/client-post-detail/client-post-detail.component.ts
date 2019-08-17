import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {PostDataType} from "../PostDataType";

@Component({
  selector: 'app-client-post-detail',
  templateUrl: './client-post-detail.component.html',
  styleUrls: ['./client-post-detail.component.sass']
})
export class ClientPostDetailComponent implements OnInit {
  post: PostDataType;
  constructor(
      private postService: PostService,
      private routes: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost = () => {
    this.routes.params.subscribe( param => {
      this.postService.getPost(param.id).subscribe( data => {
        this.post = data;
      })
    })
  }

}
