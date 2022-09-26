import { ObjetoService } from './objeto.service';
import { Component, OnInit } from '@angular/core';
import { Objeto } from './objeto.model';
@Component({
  selector: 'app-internal-box',
  templateUrl: './internal-box.component.html',
  styleUrls: ['./internal-box.component.css']
})
export class InternalBoxComponent implements OnInit {
  objetos!: Objeto[]
  constructor(private service: ObjetoService) { }

  ngOnInit(): void {
  }

  read(): void {
    this.service.read().subscribe(objeto =>{
      this.objetos[0].id = objeto.id
      this.objetos[0].name = objeto.name
    })
    console.log('dsasda')
  }

}
