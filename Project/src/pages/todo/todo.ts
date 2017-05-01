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
  itemID = 0;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data,
    public scheduleService: Scheduler, public navParams: NavParams, public alertCtrl: AlertController) {
    this.reminder = this.scheduleService.getNotificationCheck();
    this.dataService.getData().then((todos) => {

      if (todos) {
        this.items = JSON.parse(todos);
        this.resetReminders();
      }

    });
    this.dataService.getID().then((id) => {

      if (id) {
        this.itemID = JSON.parse(id);
      }

    });
    
  }

  ionViewDidEnter() {
    
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage, {itemID: this.itemID});
    addModal.onDidDismiss((item,id) => {
      if (item) {
        this.saveItem(item);
        this.dataService.saveID(id);
        this.itemID = id;
      }
    });
    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  deleteItem(item) {
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
    if (item.reminder == true) {
      this.scheduleService.scheduleNotification(item);
    } 
    //this.scheduleService.schedule(item);
  }

public cancelNotifcation(item) {
    if (item.reminder == false) {
      this.scheduleService.cancelNotification(item);
    }
    this.dataService.updateTODO(item);
  }

  infoAlert() {
    let alert = this.alertCtrl.create({
      title: 'Todo Info',
      subTitle: "Click to view item and set reminder! Slide left to delete!",
      buttons: ['OK']
    });
    alert.present();
  }

  resetReminders(){
    for(var i = 0; i < this.items.length;i++){
      var now = new Date();
      var itemDate = new Date(this.items[i].myDate);
        if(itemDate.getDate() <= now.getDate()){
          if(itemDate.getTime() < now.getTime()){
            this.items[i].reminder = false;
            this.dataService.updateTODO(this.items[i]);
          }
        }
    }
  }
}