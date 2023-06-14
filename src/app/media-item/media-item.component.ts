import { Component } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.less'],
  inputs: ['name']
})
export class MediaItemComponent {
  name: string = '';
}
