import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddshopPage } from '../addshop/addshop';
import { ManageMenuPage } from '../manage-menu/manage-menu';
import { HttpClient } from '@angular/common/http';

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

  getshop :any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    console.log(this.navParams.data.getshop);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageshopPage');
  }
  Addshop(){
    this.navCtrl.push(AddshopPage);

  }
  managemenu(shopid){
    this.navCtrl.push(ManageMenuPage,{
      getshop : shopid
    });

    console.log("shopid"+shopid);
  }

  ionViewDidEnter() {
    this.http.get("https://mrlunch.azurewebsites.net/api/Restaurant/GetRestaurants")
    .subscribe((data: any) => {
      this.getshop = data
      console.log(data);
    },
      error => {
        alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
      });
  }
}
