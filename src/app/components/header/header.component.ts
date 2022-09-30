import { Router } from '@angular/router';
import { PokemonService } from './../service/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pokemon = ''

  constructor(
    private service: PokemonService,
    private route: Router  
  ) { }

  ngOnInit(): void {
  }
  
  getPokemon(pokemon: string): void{
    console.log(pokemon)

    const url = `pokemon/${pokemon}`
    this.route.navigate([url])
  }

}
