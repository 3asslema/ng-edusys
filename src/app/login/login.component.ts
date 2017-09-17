import { AuthenticationService } from './../authentication.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credentials = {email: '', password: ''};
  constructor(private _auth: AuthenticationService) {
   }
  ngOnInit() {
  }
  login() {
    let that = this;
    this._auth.login(this.credentials).subscribe(
      data => {
        console.log(data);
        that._auth.setToken(data.token);
      },
      error => {
        console.log(error);
      },
      () => {
      console.log('Request completed!');
       } );
  }
  recover() {
    console.log('recover');
  }
}
