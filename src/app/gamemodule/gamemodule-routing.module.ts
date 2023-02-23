import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeGameComponent } from './bike-game/bike-game.component';
import { CarGameComponent } from './car-game/car-game.component';
import { GamecomponentComponent } from './gamecomponent/gamecomponent.component';

const routes: Routes = [
  {path:'', component:GamecomponentComponent,
  children:[
    {path:'car_game',component:CarGameComponent},
    {path:'bike_game',component:BikeGameComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamemoduleRoutingModule { }
