import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaPageComponent } from './media-page/media-page.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category', component: MediaPageComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
