import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api/api.service';
import { User } from '../../models/User';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

    constructor(
        private http:Http,
        private apiService:ApiService,
        private router: Router
    ){

    }

    /*----------  Login   ----------*/
    login(data: any): Observable<any>{
        let url = this.apiService.getUrl('/login');
        return this.http.post(url,data)
        .map(this.getData)
    }

    /*----------  Logout   ----------*/
    logout(): void {
		sessionStorage.removeItem('session-token');
		this.router.navigate(['/login']);
	}
    
    /*----------  Create a User   ----------*/
    createUser(User: User): Observable<any>{
        let url = this.apiService.getUrl('/signUp')
        return this.http.post(url,User)
        .map(this.extractData)
    }

     /*----------  Update a User   ----------*/
    updateUser(User: User): Observable<any>{
        let url = this.apiService.getUrl('/users/' + User._id);
        return this.http.put(url, User)
        .map(this.extractData)

    }

    //extract the data of the request HTTP
	private extractData(res: Response) {
        //get data
        let body = res.json();
        return body || { };
    }

    private getData(data: Response) {
        let data_response = data.json();
		if (data_response && data_response.token) {

			let expiration = new Date();
      		expiration.setMinutes(expiration.getMinutes() + 30);
			let content = {token: data_response.token, expires_at: expiration.getTime(),user_name: data_response.userName }
			sessionStorage.setItem('session-token', JSON.stringify(content));
			return data_response;
		}
		return data_response;
	}

	//obtiene el token de autorizacion almacenado en la session
  	private getAuthorization() {
      if (sessionStorage.getItem('session-token')) {
        let storedToken = JSON.parse(sessionStorage.getItem('session-token'));
        return storedToken['token'];
      }
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