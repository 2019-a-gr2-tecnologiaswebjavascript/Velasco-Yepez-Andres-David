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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DialogoAgregarComponent } from './componentes/dialogo-agregar/dialogo-agregar.component';
import { RutaCarritoComponent } from './rutas/ruta-carrito/ruta-carrito.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [
    AppComponent,
    RutaProductoComponent,
    RutaProductosComponent,
    RutaProductoActualizarComponent,
    RutaProductoRegistroComponent,
    RutaComprasComponent,
    MensajeDialogoComponent,
    DialogoAgregarComponent,
    RutaCarritoComponent,
  ],
  entryComponents:[
    MensajeDialogoComponent,
    DialogoAgregarComponent
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
    OverlayModule,
    MatExpansionModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MaterialFileInputModule
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
