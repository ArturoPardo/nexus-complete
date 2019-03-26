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
      {
   
        listId: 0,
        createdAt: new Date(),
        modifiedAt: new Date(),
        name: 'It´s a definite maybe (seeking feedback)',
        tasks: [
          {
            listId: 0,
            taskId: 0,
            text: 'Integration with Rocketlink',
            completed: false,
            color: 'white',
            createdAt: new Date(),
            modifiedAt: new Date(),
          },
          {
            listId: 0,
              taskId: 1,
              text: 'Unified Inbox (for comments and replies)',
              completed: false,
              color: 'white',
              createdAt: new Date(),
              modifiedAt: new Date(),
          },
          {
            listId: 0,
              taskId: 2,
              text: 'All & Dynamic Scheduling',
              completed: false,
              color: 'white',
              createdAt: new Date(),
              modifiedAt: new Date(),
          },
          {
            listId: 0,
              taskId: 3,
              text: 'Monitor feeds (list of accounts, hashtag, etc)=Streams',
              completed: false,
              color: 'white',
              createdAt: new Date(),
              modifiedAt: new Date(),
          },
          {
            listId: 0,
              taskId: 4,
              text: 'White Labeling',
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
    name: 'Next Up',
    tasks: [
      {
        listId: 1,
        taskId: 0,
        text: 'Include an Affiliate program',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 1,
        taskId: 1,
        text: 'Instagram Grow + Engage',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 1,
        taskId: 2,
        text: 'Improve the mobile app',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 1,
        taskId: 3,
        text: 'Wordpress /Shopify/ Other integration with Social Bee',
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
    name: 'In Progress',
    tasks: [
      {
        listId: 2,
        taskId: 0,
        text: 'Browser extension',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 2,
        taskId: 1,
        text: 'Mobile App for Instagram Posting',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 2,
        taskId: 2,
        text: 'Various UX Improvements',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 2,
        taskId: 3,
        text: 'Content Analytics',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 2,
        taskId: 4,
        text: 'Twitter Rules on Automation changes',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 2,
        taskId: 5,
        text: 'Complete Social Platform Variants',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 2,
        taskId: 6,
        text: 'Pinterest Support',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      
    ],
  },
  {
    listId: 3,
    createdAt: new Date(),
    modifiedAt: new Date(),
    name: 'Done',
    tasks: [
      {
        listId: 3,
        taskId: 0,
        text: 'Add /Add & Share Now',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 3,
        taskId: 1,
        text: 'Zapier app',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 3,
        taskId: 2,
        text: 'Google+ Native posting',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      {
        listId: 3,
        taskId: 3,
        text: 'Bulk upload images',
        completed: false,
        color: 'white',
        createdAt: new Date(),
        modifiedAt: new Date(),
      },
      
      {
        listId: 3,
        taskId: 4,
        text: 'PixelMe integration (for URL shortener',
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
  editTask(newTask: Task) {
    this.data.lists = this.data.lists.map(list => {
      if (list.listId === newTask.listId) {
        list.tasks = list.tasks.map(task => {
          if (task.taskId === newTask.taskId) {
            return newTask;
          }
          return task;
        });
      }
      return list;
    });
  }
}
