import {
  Component,
  Input
} from '@angular/core';
import {
  List
} from '../models.interface';
import {
  DataManagerService
} from '../data-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() list: List;
  editing = false;
  editingRe = false;
  newName: string = '';
  text: string = '';

  constructor(private dataService: DataManagerService) {}

  delete(id: number) {
    console.log(id);
    this.dataService.deleteList(id);
  }
  newTask(ev) {
    const text = ev.target.value.trim();
    if (text !== '') {
      this.dataService.addNewTask(text, this.list);
      ev.target.value = '';
      this.text = '';
    }
  }
  addListSymbol(text) {
    if (text !== '') {
     
      this.dataService.addNewTask(text, this.list);
    }
    this.text = '';
    
  }
  edit(node) {
   this.editingRe = true;
    setTimeout(() => {
     
      node.focus();
    }, 0);
    this.editing = true;
   
  }
  cancelEdit() {
    this.editing = false;
    setTimeout(() => {
     
      this.addListSymbolRe(this.newName);
    }, 0);
    
  }
  editName() {
  
    this.list.name = this.newName;
   
    this.dataService.editListName(this.list);
    this.editing = false;
    this.editingRe = false;
  }
  addListSymbolRe(newName){
  
    if (newName!== ''){
      
      this.list.name = newName;
      
    }
   
    this.editingRe = false;

  }
}
