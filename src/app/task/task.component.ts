import { Component,Input } from '@angular/core';
import { Task, List } from '../models.interface';
import { DataManagerService } from '../data-manager.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Input() list: List;
  editing:boolean =true;
  constructor(private dataService: DataManagerService) { }



  ngOnInit() {
  }

}
