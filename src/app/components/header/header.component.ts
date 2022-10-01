import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from './../service/pokemon.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  pokemon = ''
  url = ''
  constructor(
    private service: PokemonService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
  
  getPokemon(pokemon: string): void{
    this.url = `pokemon/${pokemon}`

    let currentUrl = this.url
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.route.navigate([currentUrl]);
    });
  }

}
