import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  types: Array<any> = [
    { type: 'fire', selected: false },
    { type: 'grass', selected: false },
    { type: 'bug', selected: false },
    { type: 'water', selected: false },
    { type: 'water', selected: false },
    { type: 'water', selected: false },
    { type: 'water', selected: false },
    { type: 'water', selected: false },
    { type: 'water', selected: false },
    { type: 'water', selected: false },
    { type: 'water', selected: false },
  ]

  constructor(private service: PokemonService) { }

  ngOnInit(): void {
  }

  selectTypes(): void {
    this.service.type = this.types
    this.service.addNewItem('type')
  }
}
