import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  constructor(public authService: AuthService) {}

  onAuthFormClick(event : Event): void {
    event?.stopPropagation();
  }
}
