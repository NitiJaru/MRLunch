import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManageshopPage } from '../manageshop/manageshop';
import { CreatlistPage } from '../creatlist/creatlist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  Gomanage(){
    this.navCtrl.push(ManageshopPage);
  }

  createpoll(){
    this.navCtrl.push(CreatlistPage)
  }

}
