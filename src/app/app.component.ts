import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  keyword = '';

  data: Article[] = [];

  ngOnInit(): void {
    from(fetch('/api/articles.json').then(res => res.json()))
      .subscribe(value => {
        this.data = value;
      });
  }
  setKeyword($event: KeyboardEvent) {
    const inputDom = $event.target as HTMLInputElement;
    this.keyword = inputDom.value;
  }

  clearKeyword() {
    this.keyword = '';
  }

  doSearch(val: string) {
    console.log(val);
  }

  deleteArticle(postId: number) {
    console.log(`你刪除編號 ${postId} 的文章!`);
    this.data = this.data.filter(a => a.id !== postId);
  }
}
