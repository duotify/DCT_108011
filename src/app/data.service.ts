import { Injectable } from '@angular/core';
import { Article } from './shared/article';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Article[] = [];

  constructor() { }

  deleteArticle(postId: number) {
    console.log(`你刪除編號 ${postId} 的文章!`);
    this.data = this.data.filter(a => a.id !== postId);
  }
}
