import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AddMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-menu',
  templateUrl: 'add-menu.html',
})
export class AddMenuPage {
  getshop: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    console.log('shopid = '+this.navParams.data);

  }

  ionViewDidLoad() {
 

  }
  back(){
    // https://mrlunch.azurewebsites.net/api/Restaurant/AddMenuToRestaurant/

    let option = { "headers": { "Content-Type": "application/json" } };
    // this.callpost = { id: "8", nameitem: "abcde", quantity: 12 };
    this.http.post("https://mrlunch.azurewebsites.net/api/Restaurant/AddMenuToRestaurant/"+this.navParams.data,
    this.getshop ,
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log(result);
      }, error => {
        console.log(error);
      });
  }
}
