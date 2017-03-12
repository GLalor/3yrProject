import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';
import 'rxjs/add/operator/map';

@Injectable()
export class Scheduler {
  private notificationCheck = false;

  public setNotificationCheck(checked){
    this.notificationCheck = checked;
  }

  public getNotificationCheck(){
    return this.notificationCheck;
  }

  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello Scheduler Provider');
  }
  // schedule a LocalNotifications
  public schedule(item) {
        LocalNotifications.schedule({
            title: item.title,
            text: item.description,
            at: item.date,
            sound: null
        });
    }

    public cancelNotification(){
      
    }

}
