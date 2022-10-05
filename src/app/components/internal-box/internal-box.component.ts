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
  ordem: string = 'Ordem Crescente'
  pokemonPage: PokemonPage = {
    count: 0,
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12',
    previous: '',
    results: []
  }
  pokemons: Pokemon[] = []
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

    this.getPokemons(this.ordem)
  }

  async ordenacao(v: string): Promise<void>{
    if(v == 'Ordem Crescente')
      this.pokemons.sort((a, b) => a.id-b.id)
    else if (v == 'Ordem Decrescente')
      this.pokemons.sort((a, b) => b.id-a.id)
    else if (v == 'Ordem Alfabética')
      this.pokemons.sort((a, b) => a.name.localeCompare(b.name));
    else
      {
        for (const type of this.service.type) {
          for(let index = 0; index < this.pokemons.length; index++){
            if(type.type == this.pokemons[index].types[0].type.name && type.selected == false){
              console.log(type.type)
              this.pokemons.splice(index, 1)
              index--
            }
          
          }
        }
      }
  }

  getPokemons(ordem: string): void{
    this.loading = true
    this.service.readPokemonPage(this.pokemonPage.next).subscribe(e => {
      this.pokemonPage = e
    }).add(() =>{
      this.pokemonPage.results.map(pokemon => {
        this.service.readById(pokemon.name).subscribe(pokemon => {
          this.pokemons.push(pokemon)
          this.ordenacao(ordem)
        })
      })
      this.loading = false
    })
  }
  
  getColor(type: string): string{
    return this.colorType.get(type)!
  }
  
  addPokemons(): void{
    this.getPokemons(this.ordem)
  }
}
