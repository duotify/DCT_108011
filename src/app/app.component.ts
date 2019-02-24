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
    var input_dom = $event.target as HTMLInputElement;
    this.keyword = input_dom.value;
  }

  clearKeyword($event: KeyboardEvent) {
    if ($event.key == 'Escape') {
      this.keyword = '';
      (<HTMLInputElement>$event.target).value = '';
    }
  }
}
