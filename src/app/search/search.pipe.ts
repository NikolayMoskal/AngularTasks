import { Pipe, PipeTransform } from '@angular/core';
import { MediaItem } from '../models/media-item';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(array: MediaItem[], input: string): MediaItem[] {
    return array.filter(x => x.name.includes(input));
  }
}
