import { DialogComponent } from './../ordenacao/dialog/dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonService } from './../service/pokemon.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import {FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pokemon = ''
  ultimoPokemon = ''
  selectedValue = ''
  panelOpenState = false
  types = [
    {value: 'Ordem Tipo'},
    {value: 'Ordem Crescente'},
    {value: 'Ordem Decrescente'},
    {value: 'Ordem Alfabética'},
  ]
   toppings = this.formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(
    private service: PokemonService,
    private route: Router,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
  } 

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
    
    });
  }

  ordenar(valor: any): void {
    if(valor.value == 'Ordem Tipo')
      this.openDialog()
    else
      this.service.addNewItem(valor.value)
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
