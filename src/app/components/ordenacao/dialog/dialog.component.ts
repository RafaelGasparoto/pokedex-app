import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
    { type: 'flying', selected: false },
    { type: 'normal', selected: false },
    { type: 'poison', selected: false },
    { type: 'electric', selected: false },
    { type: 'ground', selected: false },
    { type: 'fairy', selected: false },

  ]

  constructor(
    private service: PokemonService,
    public dialogRef: MatDialogRef<DialogComponent>,
    ) { }

  ngOnInit(): void {
  }

  selectTypes(): void {
    this.service.type = this.types
    this.service.addNewItem('tipo') 
    this.dialogRef.close();
  }
}
