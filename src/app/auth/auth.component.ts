import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginModel } from '../models/login-model';
import { UserRole } from '../models/user-role';
import { AuthService } from '../services/auth.service';
import { RegisterModel } from '../models/register-model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {
  roles: UserRole[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getRoles().subscribe(x => this.roles = x);
    console.log(this.roles);
  }

  onAuthorize(form: NgForm): void {
    let user = new RegisterModel();
    user.userName = form.value.username;
    user.password = form.value.password;
    this.authService.register(user);

    console.log(user);
  }
}
