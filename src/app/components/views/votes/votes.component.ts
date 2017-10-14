import { Component, OnInit } from '@angular/core';
import { Article } from './Article'

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
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

}
