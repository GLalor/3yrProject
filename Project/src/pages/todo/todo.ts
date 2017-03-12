import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Data } from '../../providers/data';
import { Scheduler } from '../../providers/scheduler'
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
  providers: [Scheduler]
})
export class ToDoPage {

  public items = [];
  title;
  description;
  myDate;
  reminder;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data,
    public scheduleService: Scheduler, public navParams: NavParams, public alertCtrl: AlertController) {
    this.reminder = this.scheduleService.getNotificationCheck();
    this.dataService.getData().then((todos) => {

      if (todos) {
        this.items = JSON.parse(todos);
      }

    });

  }

  ionViewDidLoad() {
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  deleteItem(item) {
    console.log("in del");
    console.log(item);
    var l = this.items.length;
    for (var i = 0; i < l; i++) {
      if (this.items[i].title == item.title) {
        this.items.splice(i, 1);
        this.dataService.save(this.items);
      }
    }
  }

  viewItem(item) {
      this.navCtrl.push(ItemDetailPage, {
        item: item
      });
  }
  // Notifaications 
  public scheduleNotifcation(item) {
    if (this.reminder == true) {
      this.scheduleService.schedule(item);
    }else if (this.reminder == false) {
      
    }
    //this.scheduleService.schedule(item);
  }
}