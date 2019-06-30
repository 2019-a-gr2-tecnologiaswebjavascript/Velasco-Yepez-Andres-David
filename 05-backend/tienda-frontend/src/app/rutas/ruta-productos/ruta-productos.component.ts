import { Component, OnInit } from '@angular/core';
import {ProductoHttpService} from "../../servicios/http/producto-http.service";
import {Producto} from "../../dto/producto";

@Component({
  selector: 'app-ruta-productos',
  templateUrl: './ruta-productos.component.html',
  styleUrls: ['./ruta-productos.component.css']
})
export class RutaProductosComponent implements OnInit {

  listaProductos:Producto[];

  constructor(private readonly _productoHttpService: ProductoHttpService,) { }

  ngOnInit() {
   const $productoListar = this._productoHttpService.listar()
     .subscribe(
       (productos)=>{
                this.listaProductos = productos;
        },
       (error)=>{
          console.log(error);
       }
   );
  }

}
