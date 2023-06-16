import { Component, OnInit } from '@angular/core';
import { MediaItemsService } from '../services/media-items.service';
import { MediaItem } from '../models/media-item';

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.less']
})
export class MediaPageComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  searchValue = '';

  constructor(private mediaItemsService: MediaItemsService) {}
  
  ngOnInit(): void {
    this.mediaItems = this.mediaItemsService.getAll();
  }
}
