import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public isAuthenticated = false;
  public user: any;
  constructor() {
    this.isAuthenticated = false;
   }
   login() {
    console.log('login');
  }
  logout() {
    console.log('logout');
  }
}
