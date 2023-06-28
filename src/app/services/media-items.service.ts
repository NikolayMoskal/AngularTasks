import { Injectable } from '@angular/core';
import { MediaItem } from '../models/media-item';
import { IMediaItemsService } from '../interfaces/i-media-items.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHelper } from './http-helper';

@Injectable({
  providedIn: 'root'
})
export class MediaItemsService implements IMediaItemsService {
  private route: string;

  constructor(private http: HttpClient,
              private httpHelper: HttpHelper) {
    this.route = httpHelper.getUrl('/api/media');
  }

  public getAll(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(`${this.route}/GetAll`, { headers: this.httpHelper.HTTP_HEADERS });
  }

  public getById(id: string): Observable<MediaItem | undefined> {
    var params = new HttpParams()
      .set('id', id);
    return this.http.get<MediaItem>(`${this.route}/GetById`, { headers: this.httpHelper.HTTP_HEADERS, params: params });
  }

  public saveOrUpdate(mediaItem: MediaItem): Observable<MediaItem> {
    return this.http.post<MediaItem>(`${this.route}/SaveOrUpdate`, mediaItem, { headers: this.httpHelper.HTTP_HEADERS });
  }

  public delete(id: string): Observable<MediaItem> {
    var params = new HttpParams()
      .set('id', id);
    return this.http.delete<MediaItem>(`${this.route}/Delete`, { headers: this.httpHelper.HTTP_HEADERS, params: params });
  }
}
