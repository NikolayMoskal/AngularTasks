import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/login-model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  onLogin(form: NgForm): void {
    let user: LoginModel;
    user = {
      userName: form.value.username,
      password: form.value.password
    };

    this.authService.logIn(user);
  }
}
