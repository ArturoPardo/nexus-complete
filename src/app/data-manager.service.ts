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

    lists: [{

        listId: 0,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'to do',
        tasks: [{
            listId: 0,
            taskId: 0,
            text: 'aprender angular',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 0,
            taskId: 1,
            text: 'aprender js',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          }
        ],
      },
      // ----------------------otralista
      {
        listId: 1,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'doing',
        tasks: [{
          listId: 1,
          taskId: 0,
          text: 'aprender typescript',
          completed: false,
          color: 'white',
          createdAt: new Date(),
          modifiedAt: new Date(),
        }, ],
      },
      // ....se termina lista

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
    console.log(this.data.lists);
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

}
