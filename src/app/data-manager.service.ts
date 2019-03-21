import { Injectable } from '@angular/core';
import { List} from './models.interface';


@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  constructor() { }
  data:{ lists: Array<List> }={

    lists: [
      {
     
        listId: 0,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'to do',
        tasks: [
          {
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
          },
          {
            listId: 0,
              taskId: 2,
              text: 'aprender js',
              completed: false,
              color: 'white',
              createdAt: new Date(),
              modifiedAt: new Date(),
          },
          {
            listId: 0,
              taskId: 2,
              text: 'aprender js',
              completed: false,
              color: 'white',
              createdAt: new Date(),
              modifiedAt: new Date(),
          },

        ],
  
    },
  // ----------------------otralista
  
  {
    listId: 1,
    createdAt: new Date(),
    modifiedAt: new Date(),
    name: 'doing',
    tasks: [
      {
        listId: 1,
        taskId: 0,
        text: 'aprender typescript',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
    ],
  },
  {
    listId: 2,
    createdAt: new Date(),
    modifiedAt: new Date(),
    name: 'done',
    tasks: [
      {
        listId: 2,
        taskId: 0,
        text: 'aprender typescript',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      }
    ],
  },
  // ....se termina lista
  
  ],
  
   };

  getData() {
    return this.data;
  }
  getTask() {
    return this.data.lists;
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
  }

  deleteList(id:number){
    this.data.lists = this.data.lists.filter(list => list.listId !== id)
  }
}
