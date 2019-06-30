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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import { MensajeDialogoComponent } from './componentes/mensaje-dialogo/mensaje-dialogo.component';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    RutaProductoComponent,
    RutaProductosComponent,
    RutaProductoActualizarComponent,
    RutaProductoRegistroComponent,
    RutaComprasComponent,
    MensajeDialogoComponent,
  ],
  entryComponents:[
    MensajeDialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    OverlayModule
  ],
  providers: [
    UsuarioHttpService,
    ProductoUsuarioHttpService,
    ProductoHttpService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
