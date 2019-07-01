import { Injectable } from '@angular/core';
import {Detalle} from "../../dto/detalle";

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {
  listaProductos:Detalle[]=[];

  constructor() { }

  addListaCompras(detalle:Detalle){
      const id = detalle.producto.id;
      let indiceDetalle = -1;
      // Comprobar si existe
      const existe = this.listaProductos.some(
        (detalle,indice)=>{
          if(detalle.producto.id == id){
            indiceDetalle = indice;
            return true;
          }else {
            return false;
          }
        }
      );
      if(existe){
        this.anadirAlContador(indiceDetalle,detalle.cantidad);
      }else {
        this.anadirAlCarrito(detalle);
      }
      console.log(this.listaProductos);
      return [];
  }

  protected anadirAlContador(indice:number,cantidad:number){
    this.listaProductos[indice].cantidad +=cantidad;
  }

  protected anadirAlCarrito(item:Detalle){
    this.listaProductos.splice(0,0,item);
  }


}
