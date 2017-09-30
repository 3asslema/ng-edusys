import { Injectable } from '@angular/core';

import {LoadingController, AlertController, ModalController, PopoverController, ToastController } from 'ionic-angular';
@Injectable()
export class HelperService {

  // Show/Hide a loader on page
   public loader;
   public modal;
   public popover;
   public toaster;

   // Show alert box
    public alert;
   constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public toastCtrl: ToastController,
) { 
   }

   /**
    * Show the loader
    */
    public createLoader(message: string = 'Processing', spinner = 'dots') {
      this.loader = this.loadingCtrl.create({
          content: message,
          spinner: spinner,
          duration: 3000
      });
      return this.loader.present();
  }

  public updateLoader(message: string){
      this.loader.content = message;
  }

 /**
  * Dismiss the loader
  */
  public dismissLoader() {
        this.loader.dismiss();
    }

    /**
     * Present Alert box
     */
    showAlert(title, message, buttons: any = ['Ok']){
        this.alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: buttons
        });
        this.alert.present();
    }

/**
 * Show the modal
 */
    showModal(page){
        this.modal = this.modalCtrl.create(page);
        this.modal.present();
    }

    /**
     * Dismiss modal
     */
    dismissModal(){
        this.modal.dismiss();
    }

    /**
     * Show popover
     */
    showPopover(page,$event){
        this.popover = this.popoverCtrl.create(page);
        this.popover.present({
            ev: $event
          });
    }

    /**
     * Show Toast
     */
    showToast(message, duration = 3000, position = 'top'){
      this.toaster = this.toastCtrl.create({
        message: message,
        duration: duration,
        position: position,
      });
      this.toaster.present();
    }

}
