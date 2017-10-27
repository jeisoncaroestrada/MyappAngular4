import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router){ }
    canActivate(){

        //validate if session-token exists
        if(sessionStorage.getItem('session-token')){
            let storedToken = JSON.parse(sessionStorage.getItem('session-token'));
            let now = new Date();
            // and validate if session-token dont no expire
            if(storedToken.expires_at >= now.getTime())
                return true;
            sessionStorage.removeItem('session-token');
        }
        this.router.navigate(['/login']);
        return false;
    }
}