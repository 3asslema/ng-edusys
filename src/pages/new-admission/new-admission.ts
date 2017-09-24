import { Admission } from './../../app/models/admission';
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
  public scolarYearSelectOptions: any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private _app: AppService,
    ) {
    this.facility = this._app.getFacility();
    console.log(this.facility);
    this.admission = new Admission();
    this.admission.facility = this.facility;
    this.admission.createdBy = this._app.getUser();
    this.admission.academicYear = this._app.getAcademicYear();
  
  }
  onScolarYearChange(id){
    console.log(this.admission)
    let scolarYear = this.getScolarYearById(id);
    console.log(scolarYear)    
    // Reset tuition fees
    this.admission.tuitionFees = [];
    let scolarTuitionFee = this.getTuitionFeeById(scolarYear.tuition_fee_id)
    this.admission.tuitionFees.push(scolarTuitionFee.id)
  }
  getTuitionFeeById(id){
    return this.facility.tuition_fees.find(fee => fee.id == id);
  }
  getScolarYearById(id){
    return this.facility.scolar_years.find(scolarYear => scolarYear.id == id);
  }

}
