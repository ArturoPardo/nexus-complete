import { Component, Input } from '@angular/core';
import { List } from '../models.interface';
@Component({
  selector: 'app-show-lists',
  templateUrl: './show-lists.component.html',
  styleUrls: ['./show-lists.component.scss']
})
export class ShowListsComponent {
  @Input() lists: Array<List>;
  constructor() { }
}
