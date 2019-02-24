import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo1';
  keyword = '';

  data = [];

  ngOnInit(): void {
    fetch('/api/articles.json').then((res) => {
      return res.json();
    }).then((value) => {
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
}
