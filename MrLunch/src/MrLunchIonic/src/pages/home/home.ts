import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { ManageshopPage } from '../manageshop/manageshop';
import { CreatlistPage } from '../creatlist/creatlist';
import { ResualPage } from '../resual/resual';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectmenuid: any;
  model: any;

  constructor(public navCtrl: NavController, private httpClient: HttpClient) {
  }

  ionViewWillEnter() {
    this.httpClient.get("https://mrlunch.azurewebsites.net/api/Polls/GetRestaurantPolls")
      .subscribe((data: any) => {
        this.model = data[0];
      }, error => {
        alert(error.message);
      });
  }

  Gomanage() { this.navCtrl.push(ManageshopPage); }

  createpoll() { this.navCtrl.push(CreatlistPage) }

  selectmenu(id: any) { this.selectmenuid = id }

  submit() {
    if (this.selectmenuid == null) alert("กรุณาเลือกเมนูอาหารก่อนการสั่งอาหาร");
    this.httpClient.get("https://mrlunch.azurewebsites.net/api/Polls/VotePoll/" + this.model.id + "/" + this.selectmenuid)
      .subscribe((data: any) => {
        if (data.isSuccess) {
          this.navCtrl.push(ResualPage, this.model.id);
        }
        else alert(data.errorMessage);
      }, error => {
        alert(error.message);
      });
  }

  viewpoll(){
    this.navCtrl.push(ResualPage, this.model.id);
  }

  doRefresh(refresher) {
    setTimeout(() => {

      this.httpClient.get("https://mrlunch.azurewebsites.net/api/Polls/GetRestaurantPolls")
        .subscribe((data: any) => {
          this.model = data[0];
        }, error => {
          alert(error.message);
        });
      refresher.complete();
    }, 2000);
  }

}
