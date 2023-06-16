import { Injectable } from '@angular/core';
import { MediaItem } from '../models/media-item';
import { IMediaItemsService } from '../interfaces/i-media-items.service';

@Injectable({
  providedIn: 'root'
})
export class MediaItemsService implements IMediaItemsService {
  mediaItems: MediaItem[] = [
    {id: '1', name: 'Internet'},
    {id: '2', name: 'Video'},
    {id: '3', name: 'Stream'},
    {id: '4', name: 'Music'}
  ];

  constructor() { }

  public getAll(): MediaItem[] {
    return this.mediaItems;
  }

  public getById(id: string): MediaItem | undefined {
    return this.mediaItems.find(x => x.id === id);
  }

  public saveOrUpdate(mediaItem: MediaItem): void {
    var index = this.mediaItems.findIndex(x => x.id === mediaItem.id);

    if (index < 0) {
      this.mediaItems.push(mediaItem);
      return;
    }

    this.mediaItems[index] = mediaItem;
  }

  public delete(id: string): void {
    var index = this.mediaItems.findIndex(x => x.id === id);

    if (index >= 0) {
      this.mediaItems.splice(index, 1);
    }
  }
}
