import { Observable } from "rxjs";
import { MediaItem } from "../models/media-item";

export interface IMediaItemsService {
  getAll(): Observable<MediaItem[]>;
  getById(id: string): Observable<MediaItem | undefined>;
  saveOrUpdate(mediaItem: MediaItem): Observable<MediaItem>;
  delete(id: string): Observable<MediaItem>;
}