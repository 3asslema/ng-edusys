import { AdmissionPage } from './../admission/admission';
import { Contact } from './../../app/models/contact';
import { Student } from './../../app/models/student';
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
    this.admission = new Admission();
    this.admission.facility = this.facility;
    this.admission.created_by = this._app.getUser();
    this.admission.academic_year = this._app.getAcademicYear();
    let student = new Student();
    student.extra_fields.gender = 'male';
    this.admission.student = student;
    this.admission.contact = new Contact();
  
  }
  onScolarYearChange(id){
    console.log(this.admission)
    let scolarYear = this.getScolarYearById(id);

    // Reset tuition fees
    this.admission.tuition_fees = [];
    let scolarTuitionFee = this.getTuitionFeeById(scolarYear.tuition_fee_id)
    this.admission.tuition_fees.push(scolarTuitionFee.id)
  }
  getTuitionFeeById(id){
    return this.facility.tuition_fees.find(fee => fee.id == id);
  }
  getScolarYearById(id){
    return this.facility.scolar_years.find(scolarYear => scolarYear.id == id);
  }
  save(){
    let that = this;
    console.log(this.admission);
    that._app.helper.createLoader('Enregistrement en cours...');      
    this._app.post('/admission',{'admission': this.admission})
    .subscribe((data: any) => {
      that._app.helper.updateLoader('Inscription ajouté avec succès...'); 
      this.facility.admissions.push(data);
      this.navCtrl.setRoot(AdmissionPage);
      
      },
      (error) => {
          this._app.helper.showToast(error.json().error)
      },
    )
  }

}
