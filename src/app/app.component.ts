import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Article } from './shared/article';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  keyword = '';

  constructor(public datasvc: DataService) {

  }

  ngOnInit(): void {
    from(fetch('/api/articles.json').then(res => res.json()))
      .subscribe(value => {
        this.datasvc.data = value;
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

}
