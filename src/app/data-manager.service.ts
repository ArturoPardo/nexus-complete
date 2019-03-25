import {
  Injectable
} from '@angular/core';
import {
  List,
  Task
} from './models.interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  constructor() {}
  data: {
    lists: Array < List >
  } = {

    lists: [

    ],

  };

  getData() {
    return this.data;
  }
  comparar(a, b) {
    return b.listId - a.listId;
  }

  addNewList(name: string) {
    // este name es el name de abajo
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
   
    this.data.lists.push(newList);
    this.data.lists.sort(this.comparar);
  }

  deleteList(id: number) {
    this.data.lists = this.data.lists.filter(list => list.listId !== id)
  }
  addNewTask(text: string, list: List) {
    const now = new Date();
    const newTask: Task = {
      listId: list.listId,
      taskId: Date.now(),
      text,
      completed: false,
      color: 'white',
      createdAt: now,
      modifiedAt: now,
    };
    this.data.lists = this.data.lists.map(listObj => {
      if (listObj.listId === list.listId) {
        listObj.tasks.push(newTask);
      }
      return listObj;
    });
  }
  checkedTarea(tarea) {
    tarea.completada = !tarea.completada;

  }
  editListName(list: List) {
    this.data.lists = this.data.lists.map(listObj => (listObj.listId === list.listId ? list : listObj));
  }
  deleteTask(task: Task) {
    this.data.lists = this.data.lists.map(listObj => {
      if (listObj.listId === task.listId) {
        listObj.tasks = listObj.tasks.filter(taskObj => taskObj.taskId !== task.taskId);
      }
      return listObj;
    });
  }

}
