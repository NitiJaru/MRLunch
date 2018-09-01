import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddshopPage } from '../addshop/addshop';
import { ManageMenuPage } from '../manage-menu/manage-menu';

/**
 * Generated class for the ManageshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manageshop',
  templateUrl: 'manageshop.html',
})
export class ManageshopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageshopPage');
  }
  Addshop(){
    this.navCtrl.push(AddshopPage);

  }
  managemenu(){
    this.navCtrl.push(ManageMenuPage);
  }
}
