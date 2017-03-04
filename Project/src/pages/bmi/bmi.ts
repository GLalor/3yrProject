import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html'
})
export class BMIPage {
  stone;
  pounds;
  kg;
  feet;
  inch;
  meters;
  bmi;
  result = '';
  txt;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  assignS(event: KeyboardEvent) {
    this.stone = (<HTMLInputElement>event.target).value;
  }
  kgConvert(event: KeyboardEvent) {
    this.pounds = (<HTMLInputElement>event.target).value;
    this.kg = this.stone * 6.35;
    this.kg = Math.round(this.kg + (this.pounds * 0.45));
  }
  stoneConverter(event: KeyboardEvent) {
    this.kg = (<HTMLInputElement>event.target).value;
    this.pounds = this.kg * 2.204623;
    this.stone = Math.floor(this.kg * 0.15747);
    this.pounds = Math.floor(this.pounds - (this.stone * 14));
    this.stone = this.stone;
  }

  assignf(event: KeyboardEvent) {
    this.feet = (<HTMLInputElement>event.target).value;
  }

  meterConverter(event: KeyboardEvent) {
    this.inch = (<HTMLInputElement>event.target).value;
    this.meters = this.feet * 0.3048;
    this.meters = this.meters + (this.inch / 39.37);
    this.meters = this.meters.toFixed(2);
  }
  feetConverter(event: KeyboardEvent) {
    this.meters = (<HTMLInputElement>event.target).value;
    this.inch = this.meters * 39.37008;
    this.feet = Math.floor(this.meters * 3.280840);
    this.inch = this.inch - (12 * this.feet);
    this.inch = this.inch.toFixed(2);
    this.feet = Math.floor(this.feet);
  }

  calcBMI() {
    if (this.kg == undefined && this.meters == undefined) {
      this.result = 'Neither weight or height inputted!';
    }
    else if (this.meters == undefined || this.meters == 0) {
      this.result = 'No height inputted!';
    }
    else if (this.kg == undefined || this.kg == 0) {
      this.result = 'No weight inputted!';
    }
    else {
      this.bmi = this.kg / (Math.pow(this.meters, this.meters));
      this.result = 'Your estimated BMI is ' + (this.bmi = this.bmi.toFixed(2)) + ', this is in the ';
      if (this.bmi < 16) {
        this.result += ' Severe Thinness range';
      }
      else if (this.bmi < 17) {
        this.result += ' Moderate Thinness range';
      }
      else if (this.bmi < 18.5) {
        this.result += ' Mild Thinness range';
      }
      else if (this.bmi < 25) {
        this.result += ' Normal range';
      }
      else if (this.bmi < 30) {
        this.result += ' Overweight range';
      }
      else if (this.bmi < 35) {
        this.result += ' Obese Class 1 range';
      }
      else if (this.bmi < 40) {
        this.result += ' Obese Class 2 range';
      }
      else {
        this.result += ' Obese Class 3 range';
      }
    }
    this.showAlert();

  }
  infoAlert() {
      let alert = this.alertCtrl.create({
      title: 'BMI Info',
      subTitle: "Please enter both weight and height in your prefered format",
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'BMI',
      subTitle: this.result,
      buttons: ['OK']
    });
    alert.present();
  }
}
