import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamemoduleRoutingModule } from './gamemodule-routing.module';
import { GamecomponentComponent } from './gamecomponent/gamecomponent.component';
import { BikeGameComponent } from './bike-game/bike-game.component';
import { CarGameComponent } from './car-game/car-game.component';



@NgModule({
  declarations: [
    GamecomponentComponent,
    BikeGameComponent,
    CarGameComponent
  ],
  imports: [
    CommonModule,
    GamemoduleRoutingModule
  ]
})
export class GamemoduleModule { }
