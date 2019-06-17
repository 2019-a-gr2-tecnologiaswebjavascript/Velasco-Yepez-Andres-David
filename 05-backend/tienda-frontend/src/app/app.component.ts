import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {UsuarioHttpService} from "./servicios/http/usuario-http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tienda-frontend';

  constructor(private readonly _usuarioHttpService: UsuarioHttpService) {

  }

  // Lugar seguro donde correr
  ngOnInit(): void {
      const usuarioCrear$ = this._usuarioHttpService.crear(
        {nombre:"Juan",apellido:"Pecados"}
      );
      usuarioCrear$.subscribe(
        (nuevo)=>{
              console.log(nuevo);
        },
        (error)=>{
            console.log(error);
        }
      );

      const usuarioBorrar$ = this._usuarioHttpService.borrar(1);
      usuarioBorrar$.subscribe(
        (borrado)=>{
              console.log(borrado);
        },
        (error)=>{
          console.log(error);
        }
      )
  }
}
