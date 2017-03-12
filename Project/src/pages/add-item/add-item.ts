import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  title;
  description;
  myDate: String = new Date().toISOString();
  reminder = false;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  saveItem() {
      let newItem = {
        title: this.title,
        description: this.description,
        myDate: this.myDate,
        reminder: this.reminder
      };
      //this.schedule(newItem);

    this.view.dismiss(newItem);

  }

  close() {
    this.view.dismiss();
  }

}