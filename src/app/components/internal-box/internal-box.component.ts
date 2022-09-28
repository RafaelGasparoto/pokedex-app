import { Pokemon } from './../../../../node_modules/pokenode-ts/dist/index.d';
import { ObjetoService } from './objeto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-box',
  templateUrl: './internal-box.component.html',
  styleUrls: ['./internal-box.component.css'],
})
export class InternalBoxComponent implements OnInit {
  pokemons!: Pokemon[]  
  map1 = new Map<string, string>([
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
  
  constructor(private service: ObjetoService) { 
    this.pokemons = this.service.Data
  }

  ngOnInit(): void {
  }

  getColor(type: string): string{
    return this.map1.get(type)!
  }
  add(): void{
    this.service.getDados()
  }
}
