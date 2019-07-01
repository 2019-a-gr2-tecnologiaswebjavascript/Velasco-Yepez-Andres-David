import { Component, OnInit } from '@angular/core';
import {Form} from "@angular/forms";
import {Producto} from "../../../dto/producto";
import {ProductoHttpService} from "../../../servicios/http/producto-http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ruta-producto-registro',
  templateUrl: './ruta-producto-registro.component.html',
  styleUrls: ['./ruta-producto-registro.component.css']
})
export class RutaProductoRegistroComponent implements OnInit {

  nombre:string;
  codigo:string;

  constructor(
    private readonly _productoService:ProductoHttpService,
    private readonly _router:Router
  ) { }

  ngOnInit() {
  }

  registrarProducto():void{
    let nuevoProducto={
      nombre:this.nombre,
      codigo:this.codigo,
    };

    this._productoService.crear(
      nuevoProducto,
    ).subscribe(
      (producto)=>{
        console.log(producto);
        alert("Producto Registrado");
        this._router.navigate(['/productos']);
      },
    )
  }

}
