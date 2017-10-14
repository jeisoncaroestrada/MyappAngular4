import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostService } from './services/posts/posts.service';
import { HomeComponent } from './components/views/home/home.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';

/**VOTES COMPONENTS */
import { VotesComponent } from './components/views/votes/votes.component';
import { ArticleComponent } from './components/views/votes/article/article.component';
import { NewArticleComponent } from './components/views/votes/new-article/new-article.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'votes',
    component: VotesComponent,
    data: { title: 'VotesApp' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    VotesComponent,
    PageNotFoundComponent,
    ArticleComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),    
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
