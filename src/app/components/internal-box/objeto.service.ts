import { Pokemon } from './../../../../node_modules/pokenode-ts/dist/index.d';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Objeto } from './objeto.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  private pokemons: Pokemon[] = [];

  listaPokemon: Objeto = {
    count: 0,
    next: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12',
    previous: '',
    results: []
  }

  urlBase = 'https://pokeapi.co/api/v2/pokemon'
  
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {
    this.getDados()
  }

  OnInit(){

  }

  getDados(){
    this.pokemonList().subscribe(ob => {
      this.listaPokemon = ob
    }).add(() => {
      this.listaPokemon.results.forEach(poke => {
        this.getPokemons(poke['name']).subscribe(ob => {
          this.pokemons.push(ob)
          this.pokemons.sort((a, b) => a.id-b.id)

        })
      })
    })
  }

  pokemonList(): Observable<Objeto> {
    const url = this.listaPokemon.next

    return this.http.get<Objeto>(url).pipe(
      map((obj) => obj),
    )
  }
  
  getPokemons(pokemon: string): Observable<Pokemon> {
    const url = `${this.urlBase}/${pokemon}`
    return this.http.get<Pokemon>(url).pipe(
      map((obj) => obj),)
  }

  get Data(): Pokemon[]{
    return this.pokemons
  }
 
}
