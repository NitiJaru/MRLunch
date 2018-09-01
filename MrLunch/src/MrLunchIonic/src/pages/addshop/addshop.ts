import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the AddshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addshop',
  templateUrl: 'addshop.html',
})
export class AddshopPage {
getshop : any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddshopPage');
  }
  back(){ 
    let option = { "headers": { "Content-Type": "application/json" } };
    // this.callpost = { id: "8", nameitem: "abcde", quantity: 12 };
    this.http.post("https://mrlunch.azurewebsites.net/api/Restaurant/CreateRestaurant",
    this.getshop,
      option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log(result);
      }, error => {
        console.log(error);
      });
  }
}
