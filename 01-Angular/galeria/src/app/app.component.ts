import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'galeria';
  clase = "rojo";

  arregloFloresJS = [
    {'nombre':"papitas", 'descripcion':"a lo bestia"},
    {'nombre':"carnitas", 'descripcion':"a lo bestia"},
    {'nombre':"chicas", 'descripcion':"a lo bestia"},
  ];

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

}

class Flor {
  // public ayuda a no tener que poner dos veces la variable
  constructor(public nombre:string,public descripcion:string){

  }
}
