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
  models: any;
  models3: any;
  mymodel:any = { };
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {

    console.log('shopid == ' + this.navParams.data);
  }

  ionViewDidEnter() {

    this.http.get("https://mrlunch.azurewebsites.net/api/Restaurant/GetRestaurant/" + this.navParams.data)
      .subscribe((data: any) => {
        this.getshop = data;
        this.models = data.menus;
        console.log("getmenu : " + JSON.stringify(this.models));
      },
        error => {
          alert("Error: " + error + "\nError message: " + error.message + "\nError result: " + error.error)
        });

    // console.log(this.getshop);


  }


  ionViewDidLoad() {


  }
  back() {

    console.log(this.models3);
    console.log(JSON.stringify(this.navParams.data));

    let option = { "headers": { "Content-Type": "application/json" } };
    this.http.post("https://mrlunch.azurewebsites.net/api/restaurant/addmenutorestaurant/" + this.navParams.data,
      {
        "name": this.mymodel.name
      }, option).subscribe((result: any) => {
        this.navCtrl.pop()
        console.log(result);
      }, error => {
        console.log(error);
      });
  }
}
