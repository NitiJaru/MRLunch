import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosemenuPage } from '../choosemenu/choosemenu';

/**
 * Generated class for the CreatlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creatlist',
  templateUrl: 'creatlist.html',
})
export class CreatlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatlistPage');
  }
  GochooseMenu(){
    this.navCtrl.push(ChoosemenuPage);
  }

}
