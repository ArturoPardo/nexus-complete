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
          }

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
      },
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
  // addNewList(name: string) {
  //     console.log("llego"+name);


  // }
  addNewList(name: string) {
    console.log("llego"+name);
    const now = new Date();
    const newList: List = {
      listId: Date.now(),
      createdAt: now,
      modifiedAt: now,
      name,
      tasks: [],
    };
    this.data.lists.push(newList);
    console.log(this.data.lists);
   
  }
}
