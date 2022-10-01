import { PokemonService } from './../../../service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'pokenode-ts';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  loading = false
  loa = true
  pokemon!: Pokemon
  colorStats = new Map<string, string>([
    ['hp', '#e77a7a'],
    ['attack', '#ff9e4f'],
    ['defense', '#ffff00'],
    ['special-attack', '#adaeff'],
    ['special-defense', '#00ff22'],
    ['speed', '#00ccff']
  ])
  colorType = new Map<string, string>([
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
    private service: PokemonService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id!).subscribe(pokemon => {
      this.pokemon = pokemon
    }).add(()=>{
      this.loa = false
      this.loading = true
    })

    console.log(this.loading)
  }

  getColorType(type: string): string{
    return this.colorType.get(type)!
  }
  getColorStats(stats: string): string{
    return this.colorStats.get(stats)!
  }
}
