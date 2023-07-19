import { HttpHeaders } from "@angular/common/http";

export class HttpHelper {
  public static HTTP_HEADERS: HttpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  public static SERVER_URL: string = 'https://localhost:7132';

  static getUrl(route: string): string {
    route = route.startsWith('/') ? route : `/${route}`;
    
    return `${HttpHelper.SERVER_URL}${route}`;
  }
}