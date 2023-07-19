import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  isLogin = true;
  regButtonTitle = 'Register';
  backToLoginTitle = 'Back '

  onRegisterClick(): void {
    this.isLogin = !this.isLogin;
  }
}
