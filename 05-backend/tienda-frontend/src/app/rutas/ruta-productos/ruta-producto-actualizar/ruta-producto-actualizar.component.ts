import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoHttpService} from "../../../servicios/http/producto-http.service";
import {Producto} from "../../../dto/producto";

@Component({
  selector: 'app-ruta-producto-actualizar',
  templateUrl: './ruta-producto-actualizar.component.html',
  styleUrls: ['./ruta-producto-actualizar.component.css']
})
export class RutaProductoActualizarComponent implements OnInit {


  producto:Producto;
  encontro:boolean = false;

  constructor(
    private readonly _activateRoute:ActivatedRoute,
    private  readonly _productoService:ProductoHttpService,
    private readonly _router:Router
  ) { }

  ngOnInit() {
    const parametro$ =  this._activateRoute.params;
    parametro$.subscribe(
      (parametro)=>{
        const idProducto=+parametro.idProducto;
        // recuperar registro
        this._productoService.buscar(idProducto)
          .subscribe(
            (producto)=>{
              console.log(producto);
              // Llenar el modelo
              this.producto = producto;
              this.encontro = true;
            },
            (error)=>console.log(error)
          );
      }
    );

  }
  actualizarProducto(){
    const productoModifcado = {
      nombre:this.producto.nombre,
      codigo:this.producto.codigo
    }
    this._productoService.actualizar(
      productoModifcado,
      this.producto.id,
    ).subscribe(
      (producto)=>{
        console.log(producto);
        alert("Producto actualizado");
        this._router.navigate(['/productos'])
      }
    )
  }
}
