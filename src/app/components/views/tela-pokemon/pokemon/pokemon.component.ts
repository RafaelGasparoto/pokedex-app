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

}
