import { Pokemon } from './../../../../node_modules/pokenode-ts/dist/index.d';
import { ObjetoService } from './objeto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-box',
  templateUrl: './internal-box.component.html',
  styleUrls: ['./internal-box.component.css']
})
export class InternalBoxComponent implements OnInit {
  pokemons!: Pokemon[]
  pokemon!: Pokemon
  sd!: string[]
  displayedColumns = ['name']
  constructor(private service: ObjetoService) { }

  ngOnInit(): void {
    this.service.pokemonList().subscribe(poke => {
      poke.results.forEach(pokemon => {
        this.service.getPokemons(pokemon['name']).forEach(poke=>{
          
        })
      })
    })
  }

  teste(): void {
    this.service.teste()
  }

}
