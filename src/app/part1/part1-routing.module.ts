import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PART1Component } from './part1.component';
import { GamesComponent } from '../games/games.component';
const routes: Routes = [
{path:"HOME",component:PART1Component}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part1RoutingModule { }
