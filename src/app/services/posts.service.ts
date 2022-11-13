import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  arrPosts: Post[];

  constructor() {
    this.arrPosts = [];
  }

  getAll(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPosts);
    });
  }

  insert(pPost: Post): void {
    this.arrPosts.push(pPost);
    console.log(this.arrPosts);
  }
}
