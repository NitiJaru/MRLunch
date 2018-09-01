import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddMenuPage } from '../add-menu/add-menu';

/**
 * Generated class for the ManageMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-menu',
  templateUrl: 'manage-menu.html',
})
export class ManageMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageMenuPage');
  }
  Gomanage(){
this.navCtrl.push(AddMenuPage);
  }
}
