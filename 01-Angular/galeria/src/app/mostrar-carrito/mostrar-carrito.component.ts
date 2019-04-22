import { Component, OnInit } from '@angular/core';
import {CarritoService} from "../servicios/carrito/carrito.service";

@Component({
  selector: 'app-mostrar-carrito',
  templateUrl: './mostrar-carrito.component.html',
  styleUrls: ['./mostrar-carrito.component.css']
})
export class MostrarCarritoComponent implements OnInit {

  esta_activo:boolean = true;
  total:number;
  constructor(private readonly carritoService: CarritoService) {

  }

  ngOnInit() {

  }
  mostrar(){
    this.esta_activo = !this.esta_activo;
  }

}
