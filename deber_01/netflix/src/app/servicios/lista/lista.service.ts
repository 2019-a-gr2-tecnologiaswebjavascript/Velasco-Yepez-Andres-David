import {Injectable} from "@angular/core";
import {MovieInterface} from "../../interfaces/movie-item-model";

@Injectable()
export class ListaService {
  lista:MovieInterface[] = [];

  // Version resulta en clase
  agregarLista(MovieItem:MovieInterface){
      this.anadir(MovieItem);
  }

  quitarLista(movie: MovieInterface){
    let elemento_econtrado =  this.buscar(movie);
    let index = this.lista.indexOf(elemento_econtrado);
    console.log(index);
    this.lista.splice(index,1);
  }


  protected anadir(item:MovieInterface){
    this.lista.splice(0,0,item);
  }

  buscar(movie:MovieInterface):MovieInterface{
    return this.lista.find(
      (elemento)=>{
        return (elemento.nombre === movie.nombre);
      }
    );
  }

}
