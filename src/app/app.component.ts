import { AppService } from './services/app.service';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  accessToken: any;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
     public splashScreen: SplashScreen,
     private _app: AppService,
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.accessToken = this._app.getAccessToken();
           // Set the root page
    if(this._app.getAccessToken() == null){
      this.rootPage = LoginPage;
    }
    else{
      this.rootPage = HomePage;
    }
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // Set facility to false if navigating to the home page
    if(page.title == 'Accueil'){
      this.nav.setRoot(page.component,{removeFacility: true});      
    }else{
    this.nav.setRoot(page.component);
    }
  }
}
