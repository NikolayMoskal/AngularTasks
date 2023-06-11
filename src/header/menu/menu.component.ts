import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent {
  items: string[] = [
    'Item1',
    'Item2'
  ]

  constructor(private titleService: Title) {}

  @ViewChild(MenuItemComponent) item!: ElementRef;

  onItemSelected(title: string): void {
    this.titleService.setTitle(title);
  }
}