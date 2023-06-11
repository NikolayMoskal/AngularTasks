import { Component, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less'],
  inputs: ['title'],
  outputs: ['onItemSelected']
})
export class MenuItemComponent {
  title: string = '';
  onItemSelected = new EventEmitter<string>();
}
