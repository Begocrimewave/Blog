import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css'],
})
export class ListaPostsComponent implements OnInit {
  Posts!: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getAll().then((arrPosts) => {
      this.Posts = arrPosts;
    });
  }
}
