import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Scheduler } from '../../providers/scheduler'
 
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
  providers: [Scheduler]
})
export class ItemDetailPage {
 
  title;
  description;
  myDate;
  reminder= false;
  constructor(public navParams: NavParams, public scheduleService: Scheduler){
  }
 
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.myDate = this.navParams.get('item').myDate;
    this.reminder = this.navParams.get('item').reminder;
  }
 
}