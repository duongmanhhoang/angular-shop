import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {PostDataType} from "../PostDataType";

@Component({
  selector: 'app-admin-list-posts',
  templateUrl: './admin-list-posts.component.html',
  styleUrls: ['./admin-list-posts.component.sass']

})
export class AdminListPostsComponent implements OnInit {
  posts: PostDataType[];
  postData: PostDataType;

  constructor(
      private postService: PostService
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts = () => {
    this.postService.getPosts().subscribe( data => {
      this.posts = data;
    })
  };

  edit = (post) => {
    this.postData = post;
  };

  confirm(id) {
    let res =  confirm('Bạn có chắc muốn xóa không');
    if (res == true) {
      this.postService.deletePost(id).subscribe(data => {
        this.posts = this.posts.filter(item => item.id !== data.id);
        alert('Xóa thành công');
      })
    } else {
      alert('Hú hồn, tưởng bị bay màu (☭ ͜ʖ ☭)')
    }
  }
}
