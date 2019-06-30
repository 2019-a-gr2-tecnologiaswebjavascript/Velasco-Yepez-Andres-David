import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaProductoComponent} from "./rutas/ruta-productos/ruta-producto/ruta-producto.component";
import {RutaProductoRegistroComponent} from "./rutas/ruta-productos/ruta-producto-registro/ruta-producto-registro.component";
import {RutaProductosComponent} from "./rutas/ruta-productos/ruta-productos.component";
import {RutaProductoActualizarComponent} from "./rutas/ruta-productos/ruta-producto-actualizar/ruta-producto-actualizar.component";
import {RutaComprasComponent} from "./rutas/ruta-compras/ruta-compras.component";

/*
*  productos
*  producto/registro
*  producto/1/actualizar
*  producto/1
*  compras
*
*
*  ruta-producto
*     ruta-producto
*     ruta-productoActualizar
*     ruta-productoRegistro
*  ruta-compra
*
* */
const routes: Routes = [
  {
    path:'productos',
    component:RutaProductosComponent,
  },
  {
    path:'producto/registro',
    component:RutaProductoRegistroComponent,
  },
  {
    path:'producto/:idProducto/actualizar',
    component:RutaProductoActualizarComponent,
  },
  {
    path:'producto/:idProducto',
    component:RutaProductoComponent,
  },
  {
    path:'compras',
    component:RutaComprasComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
