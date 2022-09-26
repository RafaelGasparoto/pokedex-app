import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Objeto } from './objeto.model';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class ObjetoService {
  urlBase = 'https://pokeapi.co/api/v2/pokemon/clefairy'
  constructor(private http: HttpClient, private snackbar: MatSnackBar) { }
  ngOnInit(){
    console.log(this.read())
  }
  read(): Observable<Objeto> {
    return this.http.get<Objeto>(this.urlBase).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
      )
  }
  errorHandler(e: any): Observable<any>{
    // PODERIA USAR e PARA FAZER UM TRATAMENTO DO ERRO
    this.showMessage('Ocorreu um erro', true)
    return EMPTY
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'undo', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }
}
