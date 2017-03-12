import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
play;
tapCount = 0;
  constructor(public navCtrl: NavController) {

  }

  egg(){
    this.tapCount ++;
    if(this.tapCount == 7){
      this.play = true;
    }
  }

}
