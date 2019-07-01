import { Component, OnInit } from '@angular/core';
import {CarritoCompraService} from "../../servicios/carrito/carrito-compra.service";
import {ProductoUsuarioHttpService} from "../../servicios/http/productoUsuario-http.service";
import {Detalle} from "../../dto/detalle";
import {Usuario} from "../../dto/usuario";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-carrito',
  templateUrl: './ruta-carrito.component.html',
  styleUrls: ['./ruta-carrito.component.css']
})
export class RutaCarritoComponent implements OnInit {

  listaDetalles:Detalle[]=[];
  total:number=0;
  constructor(
    private readonly _carritoService:CarritoCompraService,
    private readonly _productoUsuario:ProductoUsuarioHttpService,
    private readonly _router:Router,
  ) {
    this.listaDetalles = this._carritoService.listaProductos;
    this.listaDetalles.forEach(
      (detalle)=>{
        this.total += detalle.cantidad;
      }
    )
  }

  ngOnInit() {
  }

  comprar(){
    this.listaDetalles.forEach(
      (detalle)=> {
          const nuevoDetalle = {
            cantidad: detalle.cantidad,
            fkUsuario: 1,
            fkProducto: detalle.producto.id
          };
          this._productoUsuario.crear(nuevoDetalle).subscribe(
            (nuevoDetalle)=>{console.log("creado: ",nuevoDetalle)}
          );
      }
    );
    this._carritoService.vaciarCarrito();
    this._router.navigate(["/compras"]);
  }

}
