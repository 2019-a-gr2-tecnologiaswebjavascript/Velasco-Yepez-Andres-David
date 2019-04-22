import {Injectable} from "@angular/core";

@Injectable()
export class CarritoService {
  carritoCompras = [];

  agregar_item(item){

    // Buscar si existe
    let elemento_econtrado = this.carritoCompras.find(
      (elemento)=>{
          return (elemento.valor === item.valor && elemento.nombreTienda === item.nombreTienda);
      }
    );
    // Si existe añadir uno mas
    if (elemento_econtrado){
      console.log("encontrado");
      this.carritoCompras[this.carritoCompras.indexOf(elemento_econtrado)].total+=1;
    }else {
      // Si no crearlo
      let nuevo_item = item;
      nuevo_item['total']=1;
      this.carritoCompras.push(nuevo_item);
    }
    //this.carritoCompras.splice(0,0,item);
  }

}
