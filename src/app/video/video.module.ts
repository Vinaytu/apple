import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ShortComponent } from './short/short.component';
import { MovieComponent } from './movie/movie.component';
import { ShortvideoComponent } from './shortvideo/shortvideo.component';


@NgModule({
  declarations: [
    ShortComponent,
    MovieComponent,
    ShortvideoComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
