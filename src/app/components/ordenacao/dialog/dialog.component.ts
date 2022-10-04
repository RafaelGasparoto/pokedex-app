import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  types = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
