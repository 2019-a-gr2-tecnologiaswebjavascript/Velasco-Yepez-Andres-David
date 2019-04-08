import {Component, Input, OnInit} from '@angular/core';

// Este decorador crea el componente
@Component({
  selector: 'app-item-galeria', // Selector o nombre del compomente
  templateUrl: './item-galeria.component.html', // Ruta al template estructura
  styleUrls: ['./item-galeria.component.css'] // Ruta hacia los estilos del componente
})
// Exportar deja disponible la clase hacia otros archivos
export class ItemGaleriaComponent implements OnInit {

  title = 'Floreria';

  @Input() // Para poder llenar la variable nombreItem
  NombreItem:string;

  @Input()
  textoBoton:string;

  constructor() { }

  ngOnInit() {

  }

  alertar(){
    alert('Auxilio me desmayo!! ' + this.NombreItem)
  }

}
