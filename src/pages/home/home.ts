import { AdmissionPage } from './../admission/admission';
import { NewAdmissionPage } from './../new-admission/new-admission';
import { LoginPage } from './../login/login';
import { HelperService } from './../../app/helper.service';
import { AppService } from './../../app/services/app.service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public title = "EduSys";
  public user;
  public academicYear: any;
  public facilities: any;
  public facility: any;
  public isCurrentFacilitySet = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
     private _app: AppService,
     private _helper: HelperService,
    ) {
    let that = this
    if(this.navParams.get('removeFacility')){
      this._app.remove('facility');
    }
    this.facilities = this._app.getFacilities();
    this.academicYear = this._app.getAcademicYear();
    this.facility = this._app.getFacility();
    if(this.facility){
      this.isCurrentFacilitySet =true;
      this.title = this.facility.name;
    }
    if(this.facilities == null){
      that._helper.createLoader('Chargement en cours...');      
    this._app.get('')
    .subscribe((data: any) => {
      this.facilities = data.user.facilities;
      this.user = data.user;
      that._app.setUser(data.user);
      that._app.setFacilities(data.user.facilities);
      that._app.setAcademicYear(data.academicYear);
      
      },
      (error) => {
        if(error.status == 401){
          this.navCtrl.setRoot(LoginPage);
          this._helper.showToast(error.json().error)
        }
      },
    )
  }
  }
  admissionTapped(event, admission){
    this.navCtrl.push(AdmissionPage, {admission: admission});
  }
  facilityTapped(event, facility){
    this._app.setFacility(facility);
    this.facility = facility;
    this.title = facility.name;
    this.isCurrentFacilitySet = true;
  }

  newAdmission(){
    this.navCtrl.push(NewAdmissionPage,{facility:this.facility});
  }
  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

}
