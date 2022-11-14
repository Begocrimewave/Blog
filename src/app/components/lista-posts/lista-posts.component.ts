import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css'],
})
export class ListaPostsComponent implements OnInit {
  arrPosts: Post[];
  arrCategorias: string[];
  constructor(private postsService: PostService) {
    this.arrPosts = [];
    this.arrCategorias = [];
  }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('blog')!)) {
      this.arrPosts = JSON.parse(localStorage.getItem('blog')!);
    } else {
      this.arrPosts = this.postsService.getAll();
    }
    this.arrCategorias = this.postsService.getAllCategorias();
  }

  onChange($event: any) {
    if ($event.target.value === 'all') {
      return (this.arrPosts = this.postsService.getAll());
    } else {
      return (this.arrPosts = this.postsService.getByCategorias(
        $event.target.value
      ));
    }
  }
}
