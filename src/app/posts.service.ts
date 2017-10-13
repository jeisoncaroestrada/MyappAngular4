import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class PostService {
    constructor(private http:Http) {

    }

    getPosts(): Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(this.extractData);
        //.catch(this.handleError);
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