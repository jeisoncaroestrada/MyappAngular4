import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, XHRBackend, RequestOptions, ConnectionBackend } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { PostService } from './services/posts/posts.service';
import { HomeComponent } from './components/views/home/home.component';
import { PageNotFoundComponent } from './components/views/page-not-found/page-not-found.component';
import { ApiService } from './services/api/api.service';
import { routing } from './routes/app.routing';
import { AuthGuard } from './guards/auth-guard';
import { FilterArticlesPipe } from './pipes/FilterArticlesPipe';
import { HttpInterceptor } from './services/http-interceptor/http-interceptor';

/**VOTES COMPONENTS */
import { VotesComponent } from './components/views/votes/votes.component';
import { ArticleComponent } from './components/views/votes/article/article.component';
import { NewArticleComponent } from './components/views/votes/new-article/new-article.component';
import { ArticlesService } from './services/articles/articles.service';
import { LoginComponent } from './components/views/login/login.component';
import { SignupComponent } from './components/views/signup/signup.component';
import { AuthService } from './services/auth/auth.service';
import { NavBarComponent } from './components/views/votes/nav-bar/nav-bar.component'

/* const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'votes',
    component: VotesComponent,
    data: { title: 'VotesApp' }
  },
  { path: '**', component: PageNotFoundComponent }
]; */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    VotesComponent,
    PageNotFoundComponent,
    ArticleComponent,
    NewArticleComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    FilterArticlesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    /* RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),    */ 
  ],
  providers: [
    PostService,
    ApiService,
    ArticlesService,
    AuthGuard,
    AuthService,
    HttpInterceptor,
    {
      provide: HttpInterceptor,
      useFactory:
        (backend: XHRBackend, defaultOptions: RequestOptions,router: Router) => {
        return new HttpInterceptor(backend, defaultOptions, router);
      },
      deps: [ XHRBackend, RequestOptions, Router]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
