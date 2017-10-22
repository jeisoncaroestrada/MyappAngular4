import { Component, OnInit } from '@angular/core';
import { Article } from './Article'
import { ArticlesService } from '../../../services/articles/articles.service'

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css'],
  host: {'class': 'votes-component'}
})

export class VotesComponent implements OnInit {
  articles: Article[] = [];
  done: boolean = false;

  constructor(private articlesService:ArticlesService) {

    /*----------  GET all Articles   ----------*/
    this.articlesService.getArticles()
    .subscribe(
      success => {
        success.articles.forEach(a => {
          this.articles.push(
            new Article(a.title,a.link,a.votes,a._id)
          )
        });
        this.done = true
      },
      error =>  {
      }
    );
  }

  ngOnInit() {
  }

  /*----------  Create a Article   ----------*/
  newArticle(event){
    this.articlesService.createArticle(event)
    .subscribe(
      success =>{
        event._id = success.article._id
        this.articles.push(event)
      },
      error =>{

      }
    );
  }

  /*----------  Delete a Article   ----------*/
  deleteArticle(event){
    let index = this.articles.indexOf(event)
    this.articles.splice(index,1)
  }

  /*----------  return all Articles sorted by most voted   ----------*/
  sortedArticles(): Article[]{
    return this.articles.sort((a: Article, b:Article) =>b.votes - a.votes);
  }

}
