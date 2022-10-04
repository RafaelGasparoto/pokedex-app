import { InternalBoxComponent } from './../internal-box/internal-box.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from './../service/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pokemon = ''
  ultimoPokemon = ''
  selectedValue = ''
  types = [
    {value: 'Ordem Tipo'},
    {value: 'Ordem numeral'},
    {value: 'Ordem Alfabética'},
  ]
  constructor(
    private service: PokemonService,
    private route: Router,
    private router: ActivatedRoute,
    private order: InternalBoxComponent
  ) { }
  
  ngOnInit(): void {
  }
  
  orderPokemons(): void {
     this.order.pokemons.sort()
     console.log(this.order.pokemons[0])
  }
  
  getUltimoSelecionado(){
    if(this.service.ultimoSelecionado == '')
      this.service.showMessage('Nenhum Pokemon foi selecionado ainda!!!', true)
    
    const currentUrl = `pokemon/${this.service.ultimoSelecionado}`
    this.route.navigate([currentUrl])
  }

  getPokemon(pokemon: string): void{
    if(pokemon == '')
      return
    const currentUrl = `pokemon/${pokemon}`
    this.pokemon = ''
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.route.navigate([currentUrl]);
    });
  }

}
