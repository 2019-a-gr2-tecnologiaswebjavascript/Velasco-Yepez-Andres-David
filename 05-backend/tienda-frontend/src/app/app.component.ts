import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {UsuarioHttpService} from "./servicios/http/usuario-http.service";
import {ProductoHttpService} from "./servicios/http/producto-http.service";
import {ProductoUsuarioHttpService} from "./servicios/http/productoUsuario-http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';

  constructor(
    private readonly _usuarioHttpService: UsuarioHttpService,
    private readonly _productoHttpService: ProductoHttpService,
    private readonly _productoUsuarioHttpService: ProductoUsuarioHttpService,
  ) {

  }

  // Lugar seguro donde correr
  ngOnInit(): void {
      const usuarioCrear$ = this._usuarioHttpService.crear(
        {
          nombre:"Juanito",
          apellido:"Pecados",
          cedula:"27250214302",
          username: "Jhonny Sins",
          sueldo: 123,
          estaCasado: false,
          tipoUsuario: 'normal',
          correo:'velasco@gmail.com',
        }
      );
      usuarioCrear$.subscribe(
        (nuevo)=>{
              console.log(nuevo);
        },
        (error)=>{
            console.log(error);
        }
      );
      /*
      const usuarioBorrar$ = this._usuarioHttpService.borrar(1);
      usuarioBorrar$.subscribe(
        (borrado)=>{
              console.log(borrado);
        },
        (error)=>{
          console.log(error);
        }
      );*/
    const productoCrear$ = this._productoHttpService
      .crear({
        nombre:"Brazzers Premium",
        codigo:"0517121"
      });

    productoCrear$
      .subscribe(
        (nuevoProducto)=>{
          console.log(nuevoProducto);
        },
        (error)=>{
          console.error(error);
        },
      );
    const productoUsuarioCrear$ = this._productoUsuarioHttpService
      .crear({
        cantidad: 25,
        fkUsuario:1,
        fkProducto:1
      });
    productoUsuarioCrear$
      .subscribe(
        (nuevoProductoUsuario)=>{
          console.log(nuevoProductoUsuario);
        },
        (error)=>{
          console.error(error);
        },
      );
  }
}
