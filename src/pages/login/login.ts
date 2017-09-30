import { HelperService } from './../../app/helper.service';
import { HomePage } from './../home/home';
import { AuthenticationService } from './../../app/services/authentication.service';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private _form: FormBuilder,
     private _auth: AuthenticationService,
     private _helper: HelperService,
    ) {
      // Initiate the form
      this.loginForm = this._form.group({
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', Validators.required]
      })
      const toast = this._helper.toastCtrl.create({
        message: "You'll need to add '142.4.203.1 edusys.local' to your hosts file.",
        duration: 4000,
        position: 'middle'
      });
    
      toast.present();
  }

  /**
 * Logs in a user 
 */
login(){
  let that = this
  that._helper.createLoader('Connecting...');
  this._auth.login(this.loginForm.value)
  .subscribe(
    data => {
      that._auth.setToken(data.token)
      //this.events.publish('user:login');
      that.navCtrl.setRoot(HomePage)
      
    },
    error => {
        this._helper.showToast(error.json().error)
      
    },
    () => {
    console.log("Request completed!")
     } );

}

}
