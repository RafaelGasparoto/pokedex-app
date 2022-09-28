import { ActivatedRoute, Router } from '@angular/router';
import { ObjetoService } from './../../../internal-box/objeto.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon!: Pokemon
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
  
  constructor(
    private service: ObjetoService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id!).subscribe(pokemon => {
      this.pokemon = pokemon
    })
  }

  getColor(type: string): string{
    return this.map1.get(type)!
  }

}
