import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaCreditosComponent } from './rutas/ruta-creditos/ruta-creditos.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaNoEncontradaComponent } from './rutas/ruta-no-encontrada/ruta-no-encontrada.component';
import { RutaProductosHogarComponent } from './ruta-productos-hogar/ruta-productos-hogar.component';
import { RutaProductosVideojuegosComponent } from './ruta-productos-videojuegos/ruta-productos-videojuegos.component';
import { RutaProductosVideojuegosRpgComponent } from './ruta-productos-videojuegos-rpg/ruta-productos-videojuegos-rpg.component';
import { RutaProductosVideojuegosDeportesComponent } from './ruta-productos-videojuegos-deportes/ruta-productos-videojuegos-deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaHomeComponent,
    RutaCreditosComponent,
    RutaProductosComponent,
    RutaNoEncontradaComponent,
    RutaProductosHogarComponent,
    RutaProductosVideojuegosComponent,
    RutaProductosVideojuegosRpgComponent,
    RutaProductosVideojuegosDeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
