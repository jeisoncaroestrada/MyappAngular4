import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from '../Article'
import { ArticlesService } from '../../../../services/articles/articles.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  inputs: ['article']
})
export class ArticleComponent implements OnInit {
  @Output() deleteArticle = new EventEmitter();
  article: Article;
  editingArticle: boolean = false;
  originalArticle: Article

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
  }

  /*----------  VoteUp this Article   ----------*/
  voteUp(){
    this.articlesService.voteUp(this.article)
    .subscribe(
      success => {
        this.article.voteUp();
      },
      error =>  {
      }
    );
    return false;
  }

  /*----------  VoteDown this Article   ----------*/
  voteDown(){
    this.articlesService.voteDown(this.article)
    .subscribe(
      success => {
        this.article.voteDown();
      },
      error =>  {
      }
    );
    return false;
  }

  /*----------  Delete this Article   ----------*/
  delete(){
    let confirmation = confirm("Are you sure to want delete this article");
    if(confirmation){
      this.articlesService.deleteArtcile(this.article)
      .subscribe(
        success =>{
          this.deleteArticle.emit(
            this.article
          )
        },
        error =>{
  
        }
      );
    }
    return false;
  }

  startEdit(){
    this.editingArticle = !this.editingArticle;
    this.originalArticle = Object.assign({}, this.article);
  }

  /*----------  UPDATE this Article   ----------*/
  updateArticle(){
    this.articlesService.updateArticle(this.originalArticle)
    .subscribe(
      success =>{
        this.editingArticle = !this.editingArticle;
        this.article.title = this.originalArticle.title;
        this.article.link = this.originalArticle.link;
      },
      error =>{

      }
    );
    return false;
  }
}
