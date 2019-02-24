import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo1';
  keyword = '';

  setKeyword($event: KeyboardEvent) {
    const inputDom = $event.target as HTMLInputElement;
    this.keyword = inputDom.value;
  }

  clearKeyword() {
    this.keyword = '';
  }
}
