import { Component } from '@angular/core';
import { ModalController,NavController, ViewController } from 'ionic-angular';
import { Scheduler } from '../../providers/scheduler';
import {Storage} from '@ionic/storage';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
  providers: [Scheduler]
})
export class AddItemPage {

  title;
  description;
  now = new Date();
  myDate : String = new Date().toISOString();
  reminder = false;
  id;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public view: ViewController, public scheduleService: Scheduler, 
  public navParams: NavParams) {
    console.log("offset " +this.now.getTimezoneOffset());
    this.now.setMinutes(this.now.getMinutes() - this.now.getTimezoneOffset());
    this.now.setSeconds(0);
    this.myDate = this.now.toISOString();
  }
  ionViewDidLoad() {
    this.id = this.navParams.get('itemID');
  }
  saveItem() {
    let newItem = {
      id: this.id,
      title: this.title,
      description: this.description,
      myDate: this.myDate,
      reminder: this.reminder
    }; if (this.reminder == true) {
      this.scheduleService.scheduleNotification(newItem);
    }
    this.id = this.id + 1;
    this.view.dismiss(newItem,this.id);

  }

  close() {
    this.view.dismiss();
  }

}