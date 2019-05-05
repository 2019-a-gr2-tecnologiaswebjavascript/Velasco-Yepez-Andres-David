import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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

  cambiarEstadoMostrar(){
    this.estadoMostrarDetalle = !this.estadoMostrarDetalle;
  }

}
