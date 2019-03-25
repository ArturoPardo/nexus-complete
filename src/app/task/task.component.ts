import { Component,Input } from '@angular/core';
import { Task } from '../models.interface';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  
  completed:boolean =false;
  showMyclass:boolean =false;
  editingTask = false;
  newTaskText = '';
  constructor(private dataService: DataManagerService) { }

  siExiste() {
    this.completed = !this.completed;
  }
  mostrar(){
   this.showMyclass = !this.showMyclass;
  }
  deleteTask() {
    if (confirm('Do you want to delete the task ' + this.task.text )) {
      this.dataService.deleteTask(this.task);
    }
  
  }
  editStart(){
    this.editingTask = true;
  
  }
  cancelEdit(){
    this.editingTask = false;
    setTimeout(() => {
     
      this.addTaskSymbolRe(this.newTaskText);
    }, 0);
  }
  editTaskText() {
   
    this.task.text = this.newTaskText;
   this.dataService.editTask(this.task);
   setTimeout(() => {
     
    this.cancelEdit();
  }, 0);
    
  }

  addTaskSymbolRe(newTaskText){
    
    if (newTaskText!== ''){
      this.task.text = newTaskText;
      this.dataService.editTask(this.task);
      
    }
   
    this.editingTask = false;

  }


  


}
