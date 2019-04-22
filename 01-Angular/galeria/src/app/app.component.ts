import { Component } from '@angular/core';
import {CarritoService} from "./servicios/carrito/carrito.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'galeria';
  clase = "rojo";
  estaMostrando = false;

  arregloFloresJS = [
    {'titulo':"Don Jose",'nombre':"papitas", 'descripcion':"a lo bestia",'notas':["Papitas","Empanadas"]},
    {'titulo':"Don Byron",'nombre':"carnitas", 'descripcion':"a lo bestia",'notas':["Frutas","Verduras"]},
    {'titulo':"Baez",'nombre':"chicas", 'descripcion':"a lo bestia",'notas':["Hot Dog","Hamburguesas"]},
  ];

  constructor(
    private readonly _carritoService:CarritoService
  ){

  }

  cambioCalvo(evento:boolean){
    // Logica para hacerle rojo
    this.clase = "rojo";
    console.log("Cambio a calvo ",evento);
  }
  cambioHomero(evento:boolean){
    // Logica para hacerle amarillo
    this.clase = "amarillo";
    console.log("Cambio a homero ",evento);
  }

  mostrar(estaMostrando:boolean){
    this.estaMostrando = estaMostrando;
  }


}

class Flor {
  // public ayuda a no tener que poner dos veces la variable
  constructor(public nombre:string,public descripcion:string){

  }
}
