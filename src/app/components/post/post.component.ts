import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  Post: Post[];
  postId: number;
  constructor(
    private postService: PostService,
    private activeRoute: ActivatedRoute
  ) {
    this.Post = [];
    this.postId = 0;
  }

  ngOnInit(): void {}
}
