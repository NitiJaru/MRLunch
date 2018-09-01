import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageshopPage } from './manageshop';

@NgModule({
  declarations: [
    ManageshopPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageshopPage),
  ],
})
export class ManageshopPageModule {}
