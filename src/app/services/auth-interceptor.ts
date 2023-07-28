import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = this.authService.getAccessToken();
    let updatedHeaders = req.headers
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (accessToken)
      updatedHeaders = updatedHeaders.set('Authorization', `Bearer ${accessToken}`);
    
    let updatedReq = req.clone({
      headers: updatedHeaders
    });
    return next.handle(updatedReq);
  }
}