import { AppService } from './../../app/services/app.service';
import { CurrencyPipe } from '@angular/common';
import { TuitionFee } from './../../app/models/tuition-fee';
import { Admission } from './../../app/models/admission';
import { NavController, NavParams } from 'ionic-angular';
import { Component, OnInit, Inject,ElementRef, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'page-admission',
  templateUrl: 'admission.html',
})
export class AdmissionPage {
  @ViewChild('receipt') element: ElementRef;
public admission: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private _app: AppService,
    ) {
      
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
    html2canvas(this.element.nativeElement, <Html2Canvas.Html2CanvasOptions>{
      onrendered: (canvas: HTMLCanvasElement) =>{
        var pdf = new jsPDF('p','pt','a4');
        pdf.addHTML(canvas, () =>{
          pdf.save('web.pdf');
        });
      }
    });
  }



}
