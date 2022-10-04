import { HeaderComponent } from './../header/header.component';
import { PokemonPage } from './../service/pokemonPage.model';
import { PokemonService } from './../service/pokemon.service';
import { Pokemon } from './../../../../node_modules/pokenode-ts/dist/index.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-box',
  templateUrl: './internal-box.component.html',
  styleUrls: ['./internal-box.component.css'],
})
export class InternalBoxComponent implements OnInit {
  loading: boolean = false
  pokemonPage: PokemonPage = {
    count: 0,
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12',
    previous: '',
    results: []
  }
  pokemons: Pokemon[] = []
  ordem: string = 'Ordem Crescente'
  colorType = new Map<string, string> ([
    ['water', '#4592c4'],
    ['fire', '#fd7d24'],
    ['grass', '#9bcc50'],
    ['flying', '#3dc7ef'],
    ['poison', '#b97fc9'],
    ['bug', '#729f3f'],
    ['normal', '#a4acaf'],
    ['electric', '#eed535'],
    ['ground', '#ab9842'],
    ['fairy', '#fdb9e9'],
    ['fighting', '#d56723'],  
    ['psychic', '#f366b9'],   
  ]);
  
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.service.newItemEvent.subscribe(v=>{
      this.ordenacao(v)
      this.ordem = v
    })

    this.getPokemons()
  }

  ordenacao(v: string): void{
    if(v == 'Ordem Crescente')
      this.pokemons.sort((a, b) => a.id-b.id)
    else if (v == 'Ordem Decrescente')
      this.pokemons.sort((a, b) => b.id-a.id)
    else if (v == 'Ordem Tipo')
      console.log()
    else if (v == 'Ordem Alfabética')
      this.pokemons.sort((a, b) => a.name.localeCompare(b.name));
  }

  getPokemons(): void{
    this.loading = true
    this.service.readPokemonPage(this.pokemonPage.next).subscribe(e => {
      this.pokemonPage = e
    }).add(() =>{
      this.pokemonPage.results.map(pokemon => {
        this.service.readById(pokemon.name).subscribe(pokemon => {
          this.pokemons.push(pokemon)
          this.ordenacao(this.ordem)
        })
      })
      this.loading = false
    })
  }
  
  getColor(type: string): string{
    return this.colorType.get(type)!
  }
  
  addPokemons(): void{
    this.getPokemons()
  }
}
