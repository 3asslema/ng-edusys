import { AppService } from './../../app/services/app.service';
import { CurrencyPipe } from '@angular/common';
import { TuitionFee } from './../../app/models/tuition-fee';
import { Admission } from './../../app/models/admission';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admission',
  templateUrl: 'admission.html',
})
export class AdmissionPage {
public admission: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _app: AppService) {
    let admission = this.navParams.get('admission');
    this.admission = new Admission()
    this.admission = Object.assign(this.admission,admission)
    this.admission.tuition_fees.forEach(fee => {
        fee.formatedCost = fee.cost/1000;
        fee.installmentPerYear = (12/fee.periodicity);
        fee.costPerYear = fee.formatedCost * fee.installmentPerYear;
    });
    this.admission.scolar_year = this._app.getScolarYearById(this.admission.scolar_year_id);
  }
  generatePdf(){
    console.log(this.admission)
  }



}
