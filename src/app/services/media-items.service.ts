import { Injectable } from '@angular/core';
import { MediaItem } from '../models/media-item';
import { IMediaItemsService } from '../interfaces/i-media-items.service';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaItemsService implements IMediaItemsService {
  private serverUrl = 'http://localhost:5266/api/MediaItems'
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  public getAll(): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(`${this.serverUrl}/GetAll`);
  }

  public getById(id: string): Observable<MediaItem | undefined> {
    return this.http.get<MediaItem>(`${this.serverUrl}/GetById`, { headers: this.headers, params: new HttpParams().set("id", id) });
  }

  public saveOrUpdate(mediaItem: MediaItem): Observable<MediaItem> {
    return this.http.post<MediaItem>(`${this.serverUrl}/SaveOrUpdate`, mediaItem, { headers: this.headers });
  }

  public delete(id: string): Observable<MediaItem> {
    var params = new HttpParams()
      .set('id', id);
    return this.http.delete<MediaItem>(`${this.serverUrl}/Delete`, { headers: this.headers, params: params });
  }
}
