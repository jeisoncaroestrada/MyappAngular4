import { Component, OnInit } from '@angular/core';
import { Article } from '../Article'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: ['article']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor() {
  }

  ngOnInit() {
  }

  voteUp(){
    this.article.voteUp();
    return false;
  }
  voteDown(){
    this.article.voteDown();
    return false;
  }

}
