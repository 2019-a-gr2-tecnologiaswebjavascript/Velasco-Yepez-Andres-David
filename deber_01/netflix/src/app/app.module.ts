import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {ListaService} from "./servicios/lista/lista.service";
import { ListaFavoritosComponent } from './lista-favoritos/lista-favoritos.component';
import { EstrenoItemComponent } from './estreno-item/estreno-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    NavBarComponent,
    ListaFavoritosComponent,
    EstrenoItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
