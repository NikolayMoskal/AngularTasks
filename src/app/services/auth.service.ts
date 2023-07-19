import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login-model';
import { HttpHelper } from '../services/http-helper';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { JwtBearerToken } from '../models/jwt-bearer-token';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserRole } from '../models/user-role';
import { RegisterModel } from '../models/register-model';
import { JwtPayload, verify } from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private route: string;
  private accessTokenCookieName = 'mi_access_token';
  private refreshTokenCookieName = 'mi_refresh_token';
  private expiresInCookieName = 'mi_expires_in';
  private signingKey = 'AngularTasksTooStrongPasswordForAuthentication';

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    this.route = HttpHelper.getUrl('/auth');
  }

  logIn(loginModel: LoginModel): void {
    let isLoggedIn = this.isLoggedIn();
    if (isLoggedIn) {
      let accessToken = this.cookieService.get(this.accessTokenCookieName);
      let payload = verify(accessToken, this.signingKey, { complete: false }) as JwtPayload;
      let userName = payload[ClaimTypes.nameClaim];

      if (loginModel.userName === userName) // user is already logged, no need to relogin
        return;
    }

    this.http.post<JwtBearerToken>(`${this.route}/login`, loginModel, { headers: HttpHelper.HTTP_HEADERS, observe: 'response' })
      .subscribe(x => {
        if (x.status === 200 && x.body) {
          this.cookieService.set(this.accessTokenCookieName, x.body.access_token, { secure: true, sameSite: 'Lax' });
          this.cookieService.set(this.refreshTokenCookieName, x.body.refresh_token, { secure: true, sameSite: 'Lax' });
          this.cookieService.set(this.expiresInCookieName, x.body.expires_in.toString(), { secure: true, sameSite: 'Lax' });
        }
      });
  }

  refresh(accessToken: JwtBearerToken): void {
    this.http.post<JwtBearerToken>(`${this.route}/refresh`, accessToken, { headers: HttpHelper.HTTP_HEADERS, observe: 'response' })
      .subscribe(x => {
        if (x.status === 200 && x.body) {
          this.cookieService.set(this.accessTokenCookieName, x.body.access_token, { secure: true, sameSite: 'Lax' });
          this.cookieService.set(this.refreshTokenCookieName, x.body.refresh_token, { secure: true, sameSite: 'Lax' });
          this.cookieService.set(this.expiresInCookieName, x.body.expires_in.toString(), { secure: true, sameSite: 'Lax' });
        }
      });
  }

  register(registerModel: RegisterModel): void {
    this.http.post<JwtBearerToken>(`${this.route}/register`, registerModel, { headers: HttpHelper.HTTP_HEADERS, observe: 'response' })
      .subscribe(x => {
        if (x.status === 200 && x.body) {
          this.cookieService.set(this.accessTokenCookieName, x.body.access_token, { secure: true, sameSite: 'Lax' });
          this.cookieService.set(this.refreshTokenCookieName, x.body.refresh_token, { secure: true, sameSite: 'Lax' });
          this.cookieService.set(this.expiresInCookieName, x.body.expires_in.toString(), { secure: true, sameSite: 'Lax' });
        }
      });
  }

  logOut(): void {
    this.deleteSafely(this.accessTokenCookieName, true, 'Lax');
    this.deleteSafely(this.refreshTokenCookieName, true, 'Lax');
    this.deleteSafely(this.expiresInCookieName, true, 'Lax');
  }

  isLoggedIn(): boolean {
    if (!this.cookieService.check(this.accessTokenCookieName)
      || !this.cookieService.check(this.refreshTokenCookieName)
      || !this.cookieService.check(this.expiresInCookieName))
      return false;

    var now = Math.floor(Date.now() / 1000);

    return now < Number.parseInt(this.cookieService.get(this.expiresInCookieName));
  }

  getRoles(): Observable<UserRole[]> {
    return this.http.get(`${this.route}/roles/all`)
      .pipe(
        map((x: any) => x.map((t: any) => {
          let role: UserRole;
          role = {
            roleName: t.RoleName,
            hasRole: false
          };
          return role;
        })),
        catchError(_err => [])
      );
  }

  private deleteSafely(cookieName: string, isSecure?: boolean | undefined, sameSite?: 'Lax' | 'None' | 'Strict' | undefined) {
    if (this.cookieService.check(cookieName)) {
      this.cookieService.delete(cookieName, undefined, undefined, isSecure, sameSite);
    }
  }
}
