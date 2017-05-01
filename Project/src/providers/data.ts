import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';
 
@Injectable()
export class Data {
  oldData = [];
  constructor(public storage: Storage){
 
  }
 
  getData() {
    return this.storage.get('todos');  
  }
 
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }

  saveID(id){
    let newID = JSON.stringify(id);
    this.storage.set('itemID',newID);
  }

  getID(){
    return this.storage.get('itemID');
  }
 
  updateTODO(newData){
    console.log("in update");
     this.getData().then((todos) => {
        if(todos){
          this.oldData = JSON.parse(todos);
          console.log("oldData "+ this.oldData[0].id);
        }
     }); 
     for(var i = 0; i < this.oldData.length; i++){
       if(this.oldData[i].id == newData.id){
         this.oldData[i] = newData;
         this.save(this.oldData);
       }
     } 
  }
}