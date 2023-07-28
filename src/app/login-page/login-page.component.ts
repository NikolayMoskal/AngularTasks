import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  isLogin = true;
  regButtonTitle = 'Register';
  backToLoginTitle = 'Back to login';

  constructor(public authService: AuthService) {}

  onRegisterClick(): void {
    this.isLogin = !this.isLogin;
  }

  onLogOut(): void {
    this.authService.logOut();
  }
}
