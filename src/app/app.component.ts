import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pokedex-app';
  tiles: Tile[] = [
    {id: 'id1', text: 'One', cols: 1, rows: 1, color: 'gray'},
    {id: 'id2', text: 'Two', cols: 3, rows: 1, color: 'white'},
    {id: 'id4', text: 'Three', cols: 1, rows: 1, color: 'gray'},
  ];
}

export interface Tile {
  id: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}