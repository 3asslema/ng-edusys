import { Admission } from './../../models/admission';
import { AppService } from './../../app/services/app.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewAdmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-new-admission',
  templateUrl: 'new-admission.html',
})
export class NewAdmissionPage {
  public facility;
  public admission: Admission;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private _app: AppService,
    ) {
    this.facility = this._app.getFacility();
    console.log(this.facility);
    this.admission = new Admission();
  }


}
