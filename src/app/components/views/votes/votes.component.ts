import { Component, OnInit } from '@angular/core';
import { Article } from './Article'

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
  host: {'class': 'votes-component'}
})
export class VotesComponent implements OnInit {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 4','https://angular.io',30),
      new Article('Google','https://google.com',14),
      new Article('Json','https://jsondev.co')
    ]
  }

  ngOnInit() {
  }

  newArticle(event){
    this.articles.push(event)
  }

  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b:Article) =>b.votes - a.votes);
  }

}
