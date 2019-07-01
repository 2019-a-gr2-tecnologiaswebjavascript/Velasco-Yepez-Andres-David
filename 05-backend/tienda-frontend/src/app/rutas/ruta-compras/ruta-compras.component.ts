import { Component, OnInit } from '@angular/core';
import {ProductoUsuario} from "../../dto/productoUsuario";
import {ProductoUsuarioHttpService} from "../../servicios/http/productoUsuario-http.service";

@Component({
  selector: 'app-ruta-compras',
  templateUrl: './ruta-compras.component.html',
  styleUrls: ['./ruta-compras.component.css']
})
export class RutaComprasComponent implements OnInit {

  listaCompras:ProductoUsuario[]=[];

  constructor(
    private readonly _productoUsuarioService:ProductoUsuarioHttpService
  ) {
    this._productoUsuarioService.listar().subscribe(
      (datos)=>this.listaCompras = datos
    );
  }

  ngOnInit() {
  }

}
