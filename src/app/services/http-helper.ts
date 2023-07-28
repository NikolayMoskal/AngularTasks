import { HttpHeaders } from "@angular/common/http";

export class HttpHelper {
  public static SERVER_URL: string = 'https://localhost:7132';

  static getUrl(route: string): string {
    route = route.startsWith('/') ? route : `/${route}`;
    
    return `${HttpHelper.SERVER_URL}${route}`;
  }
}