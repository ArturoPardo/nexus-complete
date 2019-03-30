import { Component } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.scss']
})
export class AddNewListComponent{
 text:string = '';
 username:string;

  constructor(private dataService: DataManagerService) {
    this.username = this.dataService.getUser2();
   
   }
  addList(ev) {
    if (ev.target.value.trim() !== '') {
      this.dataService.addNewList(ev.target.value.trim());
      ev.target.value = '';
      this.text='';
    }
  }
  addListSymbol(text){
    console.log(text);
    if (text !== ''){
      this.dataService.addNewList(text);
      this.text='';
    }  
  }
}

