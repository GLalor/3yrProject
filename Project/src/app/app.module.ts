import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BMIPage } from '../pages/bmi/bmi';
import { TempPage } from '../pages/temp/temp';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ToDoPage } from '../pages/todo/todo';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { Data } from '../providers/data';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ToDoPage,
    BMIPage,
    TempPage,
    HomePage,
    TabsPage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ToDoPage,
    BMIPage,
    TempPage,
    HomePage,
    TabsPage,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Storage, Data]
})
export class AppModule {}
