import { Component } from '@angular/core';

import { BMIPage } from '../bmi/bmi';
import { ToDoPage } from '../todo/todo';
import { TempPage } from '../temp/temp';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ToDoPage;
  tab3Root: any = BMIPage;
  tab4Root: any = TempPage

  constructor() {

  }
}
