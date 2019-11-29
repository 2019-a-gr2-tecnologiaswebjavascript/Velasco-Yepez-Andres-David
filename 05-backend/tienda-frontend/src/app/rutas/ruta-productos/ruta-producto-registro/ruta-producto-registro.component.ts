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
  archivo:any;

  constructor(
    private readonly _productoService:ProductoHttpService,
    private readonly _router:Router
  ) { }

  ngOnInit() {
  }

  registrarProducto():void{
    console.log(this.archivo._files[0]);
    let nuevoProducto={
      nombre:this.nombre,
      codigo:this.codigo,
    };

    this._productoService.crear(
      nuevoProducto,
    ).subscribe(
      (producto)=>{
        console.log(producto);
        // Subit imagen del producto
        this.enviarArchivo(producto.id);
        alert("Producto Registrado");
        this._router.navigate(['/productos']);
      },
    )
  }

  protected  enviarArchivo(id:number){
    const producto$ = this._productoService.cargarArchivo(this.archivo._files[0],id);
    producto$.subscribe(
      (datos)=>console.log(datos),
    );
  }

}
