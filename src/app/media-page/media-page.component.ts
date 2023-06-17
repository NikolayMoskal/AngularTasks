import { Component, OnInit } from '@angular/core';
import { MediaItemsService } from '../services/media-items.service';
import { MediaItem } from '../models/media-item';
import { NgForm } from '@angular/forms';

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
    this.mediaItemsService.getAll().subscribe(x => this.mediaItems = x);
  }

  onSubmit(mediaForm: NgForm): void {
    this.searchValue = mediaForm.value.searchValue;
  }
}
