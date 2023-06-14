import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less'],
  inputs: ['title', 'link'],
  outputs: ['onItemSelected']
})
export class MenuItemComponent {
  title: string = '';
  link: string = '';
  onItemSelected = new EventEmitter<string>();
}
