import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemGaleriaComponent } from './item-galeria/item-galeria.component';
import {CarritoService} from "./servicios/carrito/carrito.service";
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';

@NgModule({
  declarations: [ // Componentes
    AppComponent,
    ItemGaleriaComponent,
    MostrarCarritoComponent
  ],
  imports: [ // Otros Modulos
    BrowserModule // Directivas
  ],
  providers: [ // Servicios
    CarritoService
  ],
  bootstrap: [AppComponent] //Componente Principal
})
export class AppModule { }
