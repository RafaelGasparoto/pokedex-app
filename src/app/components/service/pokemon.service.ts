import { PokemonPage } from './pokemonPage.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlBase = 'https://pokeapi.co/api/v2/pokemon'
  
  constructor(private http: HttpClient) {
  }

  readPokemonPage(page: string): Observable<PokemonPage>{
    const url = page
    return this.http.get<PokemonPage>(url)
  }

  readById(id: string): Observable<Pokemon>{
    const url = `${this.urlBase}/${id}`
    return this.http.get<Pokemon>(url)
  }
}
