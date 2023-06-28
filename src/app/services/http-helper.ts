import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HttpHelper {
  private _httpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

  public HTTP_HEADERS: HttpHeaders = this._httpHeaders;
  public SERVER_URL: string = 'https://localhost:7132';

  getUrl(route: string): string {
    route = route.startsWith('/') ? route : `/${route}`;
    
    return `${this.SERVER_URL}${route}`;
  }
}