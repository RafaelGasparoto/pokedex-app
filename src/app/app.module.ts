import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list'
import { BodyComponent } from './components/views/body/body.component';
import { InternalBoxComponent } from './components/internal-box/internal-box.component';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatButtonModule } from '@angular/material/button';
import { PokemonComponent } from './components/views/tela-pokemon/pokemon/pokemon.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from "@angular/material/select";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/ordenacao/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    InternalBoxComponent,
    PokemonComponent,
    DialogComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatDialogModule 
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' }, PokemonComponent, HeaderComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
