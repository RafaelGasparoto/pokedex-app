import { Observable } from 'rxjs';
import { Pokemon } from './../../../../node_modules/pokenode-ts/dist/index.d';
import { ObjetoService } from './objeto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internal-box',
  templateUrl: './internal-box.component.html',
  styleUrls: ['./internal-box.component.css']
})
export class InternalBoxComponent implements OnInit {
  pokemons!: Pokemon[]
  displayedColumns = ['name']
  constructor(private service: ObjetoService) { 
    
  }

  ngOnInit(): void {
  }

  teste(): void{
    this.pokemons = this.service.Data
  }

}
