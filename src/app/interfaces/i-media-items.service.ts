import { MediaItem } from "../models/media-item";

export interface IMediaItemsService {
  getAll(): MediaItem[];
  getById(id: string): MediaItem | undefined;
  saveOrUpdate(mediaItem: MediaItem): void;
  delete(id: string): void;
}