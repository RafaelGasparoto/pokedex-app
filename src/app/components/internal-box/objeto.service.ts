import { Pokemon } from './../../../../node_modules/pokenode-ts/dist/index.d';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Objeto } from './objeto.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  pokemons: Pokemon[] = [];
  listaPokemon: Objeto = {
    count: 0,
    next: '',
    previous: '',
    results: []
  }
  urlBase = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private http: HttpClient, private snackbar: MatSnackBar) { 
    this.pokemonList().subscribe(ob => {
      this.listaPokemon = ob
    })
  }

  pokemonList(): Observable<Objeto> {
    const url = `${this.urlBase}?limit=10&offset=5` 
    
    return this.http.get<Objeto>(url).pipe(
      map((obj) => obj),
      )
  }
  

  // pokemonResults(): void {
  //   this.pokemonList().subscribe(objeto=>{
  //     objeto.results.forEach((pokemon)=>{
  //       this.getPokemons(pokemon['name']).forEach((poke)=>{
  //         this.poke = poke
  //         this.pokemon.unshift(poke)
  //         console.log(this.pokemon)
  //       })
  //     })
  //   })
  // }
  teste(): void{
this.data()
  }
  data(): Pokemon[]{
    this.listaPokemon.results.forEach(poke => {
      this.getPokemons(poke['name']).subscribe(ob => { 
        this.pokemons.push(ob)
      })
    })
    
    this.pokemons.forEach(poke => {console.log(poke.name)})
    return this.pokemons
  }

  getPokemons(pokemon: string): Observable<Pokemon>{
    const url = `${this.urlBase}/${pokemon}`
    return this.http.get<Pokemon>(url).pipe(
      map((obj) => obj),)
  }
}
