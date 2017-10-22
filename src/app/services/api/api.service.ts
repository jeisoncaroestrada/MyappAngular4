import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService{
    public apiUrl = environment.apiEndPoint;
    
    //contruct and return server endPoint 
    getUrl(model: string){
        return this.apiUrl + model;
    }
    
    constructor(){

    }
}