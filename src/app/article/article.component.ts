import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() idx: number;
  @Input() item: Article;

  @Output() delete = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }
}
