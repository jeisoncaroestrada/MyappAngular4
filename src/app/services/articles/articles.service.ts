import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api/api.service'
import { Article } from '../../components/views/votes/Article'

@Injectable()

export class ArticlesService {

    constructor(
        private http:Http,
        private apiService:ApiService
    ){

    }

    /*----------  GET all Articles   ----------*/
    getArticles(): Observable<any>{
        let url = this.apiService.getUrl('/articles');
        return this.http.get(url)
        .map(this.extractData)
    }
    
    /*----------  Create a Article   ----------*/
    createArticle(Article: Article): Observable<any>{
        let url = this.apiService.getUrl('/articles')
        return this.http.post(url,Article)
        .map(this.extractData)
    }

    updateArticle(Article: Article): Observable<any>{
        let url = this.apiService.getUrl('/articles/' + Article._id);
        return this.http.put(url, Article)
        .map(this.extractData)

    }

    /*----------  Delete a Article   ----------*/
    deleteArtcile(Article: Article): Observable<any>{
         let url = this.apiService.getUrl('/articles/' + Article._id);
         return this.http.delete(url)
         .map(this.extractData)
    }

    /*----------  VOTEUP a Article   ----------*/
    voteUp(Article: Article): Observable<any>{
        let url = this.apiService.getUrl('/articles/voteUp/' + Article._id)
        return this.http.put(url,Article)
        .map(this.extractData)
    }

    /*----------  VOTEDOWN a Article   ----------*/
    voteDown(Article: Article): Observable<any>{
        let url = this.apiService.getUrl('/articles/voteDown/' + Article._id)
        return this.http.put(url,Article)
        .map(this.extractData)
    }

    //extract the data of the request HTTP
	private extractData(res: Response) {
        //get data
        let body = res.json();
        return body || { };
    }

    //get the errors messages to result of the request HTTP
    private handleError (error: Response | any) {
        // show errors
        let errMsg: Array<any>;
        if (error instanceof Response) {
                const body = error.json() || '';
                const err = body || JSON.stringify(body);
                errMsg = err;
                
        } else {
                errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);

    }
}