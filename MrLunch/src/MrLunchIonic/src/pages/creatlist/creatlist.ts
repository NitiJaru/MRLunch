import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosemenuPage } from '../choosemenu/choosemenu';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@IonicPage()
@Component({
  selector: 'page-creatlist',
  templateUrl: 'creatlist.html',
})
export class CreatlistPage {

  response: any;

  listmenu: any;
  model: any = { };

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {

    this.httpClient.get("https://mrlunch.azurewebsites.net/api/Restaurant/GetRestaurants")
    .subscribe((data:any)=>{
        this.response = data;
    },error=>{
      alert(error.message);
    });

  }

  onchangeshop(){
    this.response.forEach(element => {
      if(element.id == this.model.restaurantId){
        this.model.restaurantName = element.name;
        this.listmenu = element.menus;
      }
    });
  }

  submit(){
    
    let option = { "headers": { "Content-Type": "application/json" }};
    this.httpClient.post("https://mrlunch.azurewebsites.net/api/polls/createpoll",this.model, option)
    .subscribe((data:any)=>{
      if(data.isSuccess) {
        this.navCtrl.push(ChoosemenuPage);
      }
      else alert(data.errorMessage);
    },error=>{
      alert(error.message);
    });

  }

}
