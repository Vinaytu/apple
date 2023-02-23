import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { ShortComponent } from './short/short.component';
import { ShortvideoComponent } from './shortvideo/shortvideo.component';

const routes: Routes = [
  {path:'',component:ShortComponent,

  children:  [
  {path:'short',component:ShortComponent},
  {path:'movie', component:MovieComponent},
  {path:'shortvideo', component:ShortvideoComponent},
]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
