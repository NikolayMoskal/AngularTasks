import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaPageComponent } from './media-page/media-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'page', component: MediaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
