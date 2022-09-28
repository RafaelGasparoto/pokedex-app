import { InternalBoxComponent } from './components/internal-box/internal-box.component';
import { PokemonComponent } from './components/views/tela-pokemon/pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: InternalBoxComponent
  },
  {
    path: "pokemon/:id",
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
