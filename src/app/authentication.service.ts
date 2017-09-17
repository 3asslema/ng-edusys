import { AppService } from './app.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor(private _app: AppService) { }
    /** 
   * Login user and return access token
   */
  login(credentials: any){
    let uri = this._app.environment.loginUri;
    let body = JSON.stringify(credentials);
    return this._app.post(uri, body);
    }
  
    /**
     * Set token
     */
    setToken(token: any) {
      localStorage.setItem('access_token',token); 
    }
  

    getToken() {
      return JSON.parse(localStorage.getItem('access_token'));
    }
  
    /**
     * Verify user has an access token
     */
    hasAccessToken(){
        let token = this.getToken();
          if (token != null) {
            return true;
        }
        return false;
    }
  
    /**
     * Set user
     */
    setUser(user:any){
      localStorage.setItem('user',JSON.stringify(user)); 
    }
  
    /**
     * Get user
     */
    getUser(){
      return JSON.parse(localStorage.getItem('user'));
    }

}
