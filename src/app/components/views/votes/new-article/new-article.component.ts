import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../Article'

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  @Output() createArticle = new EventEmitter();
  newArticle: Article

  constructor() { }

  ngOnInit() {
  }
  
  addArticle(
    newArticle,
    title: HTMLInputElement,
    link: HTMLInputElement
  ){
    this.createArticle.emit(
      new Article(title.value,link.value)
    )
    title.value = '';
    link.value = '';
    return false;

  }

}
