import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {UsuarioHttpService} from "./servicios/http/usuario-http.service";
import {ProductoHttpService} from "./servicios/http/producto-http.service";
import {ProductoUsuarioHttpService} from "./servicios/http/productoUsuario-http.service";
import { RutaProductoComponent } from './rutas/ruta-productos/ruta-producto/ruta-producto.component';
import { RutaProductosComponent } from './rutas/ruta-productos/ruta-productos.component';
import { RutaProductoActualizarComponent } from './rutas/ruta-productos/ruta-producto-actualizar/ruta-producto-actualizar.component';
import { RutaProductoRegistroComponent } from './rutas/ruta-productos/ruta-producto-registro/ruta-producto-registro.component';
import { RutaComprasComponent } from './rutas/ruta-compras/ruta-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaProductoComponent,
    RutaProductosComponent,
    RutaProductoActualizarComponent,
    RutaProductoRegistroComponent,
    RutaComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsuarioHttpService,
    ProductoUsuarioHttpService,
    ProductoHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
