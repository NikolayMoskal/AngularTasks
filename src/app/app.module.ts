import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MenuComponent } from './header/menu/menu.component';
import { MenuItemComponent } from './header/menu/menu-item/menu-item.component';
import { LogoComponent } from './header/logo/logo.component';
import { MediaPageComponent } from './media-page/media-page.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { SearchPipe } from './search/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    MediaItemComponent,
    MenuComponent,
    MenuItemComponent,
    MediaPageComponent,
    HomeComponent,
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    HeaderComponent,
    AppComponent
  ]
})
export class AppModule { }
