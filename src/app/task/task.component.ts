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
  constructor(private dataService: DataManagerService) { }

  siExiste() {
   
    this.completed = !this.completed;
    console.log(this.completed)
  }
  mostrar(){console.log("hh");

  }


}
