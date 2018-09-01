import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatlistPage } from '../pages/creatlist/creatlist';
import { ChoosemenuPage } from '../pages/choosemenu/choosemenu';
import { ManageshopPage } from '../pages/manageshop/manageshop';
import { AddshopPage } from '../pages/addshop/addshop';
import { AddMenuPage } from '../pages/add-menu/add-menu';
import { ManageMenuPage } from '../pages/manage-menu/manage-menu';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatlistPage,
    ChoosemenuPage,
    HomePage,
    ManageshopPage,
    AddshopPage,
    AddMenuPage,
    ManageMenuPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatlistPage,
    ChoosemenuPage,
    HomePage,
    ManageshopPage,
    AddshopPage,
    AddMenuPage,
    ManageMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
