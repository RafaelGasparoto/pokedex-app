import { Router } from '@angular/router';
import { PokemonPage } from './pokemonPage.model';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlBase = 'https://pokeapi.co/api/v2/pokemon'
  ultimoSelecionado = ''
  type: any
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }

  constructor(private http: HttpClient, private snackbar: MatSnackBar, private route: Router) {
  }

  readPokemonPage(page: string): Observable<PokemonPage>{
    const url = page
    return this.http.get<PokemonPage>(url)
  }

  readById(id: string): Observable<Pokemon>{
    const url = `${this.urlBase}/${id}`
    return this.http.get<Pokemon>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)))
  }

  errorHandler(e: any): Observable<any>{
    this.route.navigate([''])
    this.showMessage('O nome ou número de Pokemon não existe', true)
    return EMPTY
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, '', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

}
