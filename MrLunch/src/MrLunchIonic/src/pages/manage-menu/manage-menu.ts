import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddMenuPage } from '../add-menu/add-menu';
import { HttpClient } from '@angular/common/http';

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
  Shopid : any;
  getshop: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    console.log(this.navParams.data);
  }

  ionViewDidEnter() {
    this.http.get("https://mrlunch.azurewebsites.net/api/Restaurant/GetRestaurant/" + this.navParams.data.getshop)
      .subscribe((data: any) => {
        this.Shopid = data.id;
        this.getshop = data.menus;
        console.log("param" + JSON.stringify(this.navParams.data));
        console.log("getmenu" + JSON.stringify(data.menus));
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageMenuPage');
  }

  Gomanage() {
    this.navCtrl.push(AddMenuPage,this.Shopid);
    // console.log("Showshopid :" +Shopid);
  }
}
