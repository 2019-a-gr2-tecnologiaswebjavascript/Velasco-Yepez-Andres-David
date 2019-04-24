import {Injectable} from "@angular/core";
import {ItemCarritoCompras} from "../../interfaces/item-carrito-compras";

@Injectable()
export class CarritoService {
  carritoCompras:ItemCarritoCompras[] = [];

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
      this.carritoCompras[this.carritoCompras.indexOf(elemento_econtrado)].cantidad+=1;
    }else {
      // Si no crearlo
      let nuevo_item = item;
      nuevo_item['total']=1;
      this.carritoCompras.push(nuevo_item);
    }
    //this.carritoCompras.splice(0,0,item);
  }

  // Version resulta en clase
  agregarCarritoDeCompras(itemCarrito:ItemCarritoCompras):ItemCarritoCompras[]{
    const id = itemCarrito.valor;
    let indiceItem = -1;
    const existe = this.carritoCompras
      .some(
      (item:ItemCarritoCompras,indice)=>{
                  if(item.valor == itemCarrito.valor && item.nombreTienda == itemCarrito.nombreTienda){
                    indiceItem = indice;
                   return true;
                  }
                  return false;
              }
    );

    if(existe){
      this.anadirAlContador(indiceItem);
      console.log("Se anadio al carrito")
    }else{
      this.anadirAlCarrito(itemCarrito);
    }

    return [];
  }

  protected anadirAlContador(indice:number){
    this.carritoCompras[indice].cantidad++;
  }

  protected anadirAlCarrito(item:ItemCarritoCompras){
    item.cantidad = 1;
    this.carritoCompras.splice(0,0,item);
  }
}


// forEach -> Undefined -> Void
// find -> boolean
// some -> alguno, equivalente al or -> boolean
// every -> todos, equivalente al and -> boolean
