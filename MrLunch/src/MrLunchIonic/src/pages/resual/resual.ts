import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@IonicPage()
@Component({
  selector: 'page-resual',
  templateUrl: 'resual.html',
})
export class ResualPage {

  model: any = { };
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {

    this.httpClient.get("https://mrlunch.azurewebsites.net/api/polls/getrestaurantPoll/" + this.navParams.data)
      .subscribe((data: any) => {
        this.model = data;
      }, error => {
        alert(error.message);
      });
  }

}
