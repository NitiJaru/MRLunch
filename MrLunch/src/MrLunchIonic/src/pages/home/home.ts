import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ManageshopPage } from '../manageshop/manageshop';
import { CreatlistPage } from '../creatlist/creatlist';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  model: any;
  constructor(public navCtrl: NavController, private httpClient: HttpClient) {
  }

  ionViewWillEnter() {
    this.httpClient.get("https://mrlunch.azurewebsites.net/api/Polls/GetRestaurantPolls")
      .subscribe((data: any) => {
        this.model = data[0];
        console.log(JSON.stringify(this.model));
      }, error => {
        alert(error.message);
      });
  }

  Gomanage() {
    this.navCtrl.push(ManageshopPage);
  }

  createpoll() {
    this.navCtrl.push(CreatlistPage)
  }

  selectmenu(id: any) {
    console.log(JSON.stringify(id));
  }

  doRefresh(refresher){
    setTimeout(() => {
      
      this.httpClient.get("https://mrlunch.azurewebsites.net/api/Polls/GetRestaurantPolls")
      .subscribe((data: any) => {
        this.model = data[0];
        console.log(JSON.stringify(this.model));
      }, error => {
        alert(error.message);
      });
      refresher.complete();
    }, 2000);
  }

}
