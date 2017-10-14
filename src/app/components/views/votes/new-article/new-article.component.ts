import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  addArticle(newArticle):boolean{
    console.log(newArticle.title.value)
    return false;

  }

}
