import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod, Response } from '@angular/http';
import { environment } from '../environments/environment';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


/*
  Generated class for the AppProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AppService {

  public environment: any;
  public accessToken: string;
  public user: string;
  public headers: any;
  public options: any;


  constructor(private _http: Http) {
    // We set the current environment when initiating
  this.environment = environment;
  console.log(this.environment);
  }

  /**
   * Set request options
   */
setRequestOptions() {
  this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer' + ' ' + (this.getAccessToken()) });
  this.headers.append('Access-Control-Allow-Origin', '*');
  this.headers.append('Access-Control-Allow-Credentials', true);
  // this.headers.append('X-Requested-With', 'XMLHttpRequest');
  this.options = new RequestOptions({ headers: this.headers });
}

/**
 * Construct the url
 * @param uri
 */
getUrl(uri: string) {
  return this.environment.apiEndpoint + uri;
}

/**
 * Send an HTTP post request
 * @param url
 * @param body
 */
post(uri: string, body: any){
  this.setRequestOptions();
  let url = this.getUrl(uri);
  let response = this._http.post(url, body, this.options)
     .map(res => res.json())
     .catch(this.handleError);
    console.log(response);
     return response;
}

/**
 * Send an HTTP get request
 * @param url
 * @param body
 */
get(uri: string) {
  this.setRequestOptions();
  let url = this.getUrl(uri);

  let response = this._http.get(url, this.options)
     .map(res => res.json())
     .catch(this.handleError);

     return response;
}

/**
 * Send an HTTP PUT request
 * @param uri
 * @param data
 */
put(uri: string, data) {
  this.setRequestOptions();
  let url = this.getUrl(uri);

  let response = this._http.put(url, data, this.options)
  .map(res => res.json())
  .catch(this.handleError);

  return response;
}


/**
 * Send an HTTP PUT request
 * @param uri
 * @param data
 */
delete(uri: string) {
  this.setRequestOptions();
  let url = this.getUrl(uri);

  let response = this._http.delete(url,this.options)
  .map(res => res.json())
  .catch(this.handleError)

  return response;
}

/**
 * Get the access token
 */
getAccessToken() {
  return localStorage.getItem('access_token');
}

/**
 * Get connected user
 */
getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

/**
   * Handle http request error
   * @param error
   */
  handleError(error: Response) {
    return Observable.throw(error.json() || ' error');
  }

}
