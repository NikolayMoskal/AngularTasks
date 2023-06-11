import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app/app.component';
import { MenuComponent } from './header/menu/menu.component';
import { MenuItemComponent } from './header/menu/menu-item/menu-item.component';
import { LogoComponent } from './header/logo/logo.component';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    AppComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    HeaderComponent
  ]
})
export class AppModule { }
