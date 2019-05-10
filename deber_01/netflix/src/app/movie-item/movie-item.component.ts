import {Component, Input, OnInit} from '@angular/core';
import {ListaService} from "../servicios/lista/lista.service";
import {MovieInterface} from "../interfaces/movie-item-model";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  constructor(private readonly _listaService:ListaService) {}

  ngOnInit(){
  }

  @Input()
  nombre:string;
  @Input()
  duracion:string;
  @Input()
  categorias:string[];
  @Input()
  clasificacion:number;
  @Input()
  portadaUrl:string;
  @Input()
  descripcion:string;



  estadoMostrarDetalle=false;
  @Input()
  estaEnLista:boolean = false;

  cambiarEstadoMostrar(){
    this.actualizarComponente();
    this.estadoMostrarDetalle = !this.estadoMostrarDetalle;
  }

  protected actualizarComponente(){
      this.estaEnLista = !!this._listaService.buscar(this.obtenerObjetoPelicula());
  }

  agregarLista(){
    let itemPelicula:MovieInterface = this.obtenerObjetoPelicula();
    this._listaService.agregarLista(itemPelicula);
    this.estaEnLista = true;
    this.cambiarEstadoMostrar();
  }

  quitarLista(){
    let itemPelicula:MovieInterface = this.obtenerObjetoPelicula();
    this._listaService.quitarLista(itemPelicula);
    this.estaEnLista = false;
    this.cambiarEstadoMostrar();
  }

  obtenerObjetoPelicula():MovieInterface{
     return{
      'nombre': this.nombre,
      'descripcion': this.descripcion,
      'categorias': this.categorias,
      'duracion': this.duracion,
      'clasificacion': this.clasificacion,
      'portadaUrl': this.portadaUrl
    };
  }



}
