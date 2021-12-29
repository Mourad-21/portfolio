import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PART1Component } from './part1/part1.component';
import { GamesComponent } from './games/games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
{path:"home",component:PART1Component },
 {path:"game",component:GamesComponent},
  {path : '', redirectTo:"home",pathMatch:"full"},
  {path : '**',component:PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
