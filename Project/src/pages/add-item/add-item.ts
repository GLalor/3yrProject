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
  myDate = new Date();
  reminder = false;
  id;

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public view: ViewController, public scheduleService: Scheduler, 
  public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.id = this.navParams.get('count');
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
    this.view.dismiss(newItem);

  }

  close() {
    this.view.dismiss();
  }

}