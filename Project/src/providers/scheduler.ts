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
  }

  // schedule a LocalNotifications
  public scheduleNotification(item) {
    var notificationDate = new Date(item.myDate);
    notificationDate.setMinutes(notificationDate.getMinutes() + notificationDate.getTimezoneOffset());
        LocalNotifications.schedule({
            id: item.id,
            title: item.title,
            text: item.description,
            at: notificationDate,
            sound: null
        });
    }

    public cancelNotification(item){
      LocalNotifications.cancel(item.id);
    }

}
