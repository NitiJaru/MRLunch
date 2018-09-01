import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChoosemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choosemenu',
  templateUrl: 'choosemenu.html',
})
export class ChoosemenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl.remove(this.navCtrl.length()-1);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosemenuPage');
  }

}
