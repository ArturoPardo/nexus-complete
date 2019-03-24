import { Component} from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Data } from '../models.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  data: Data;
  
  constructor(private dataManager: DataManagerService) {
    this.data = this.dataManager.getData();
   
  }

}
