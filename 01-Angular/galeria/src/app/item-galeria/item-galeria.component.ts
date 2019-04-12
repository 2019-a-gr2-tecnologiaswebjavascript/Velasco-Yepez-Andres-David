import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Output()
  cambioCalvo:EventEmitter<boolean> = new EventEmitter();

  @Output()
  cambioHomero:EventEmitter<boolean> = new EventEmitter();

  url = "https://i.pinimg.com/736x/35/f3/bd/35f3bd1e00ef3c7c720895ea963f2d26.jpg";

  notas = [1,2,3,4,5,6,7,8,9,10];


  @Input()
  textoBoton:string;

  constructor() { }

  ngOnInit() {

  }

  alertar(){
    alert('Auxilio me desmayo!! ' + this.NombreItem)
  }

  alertarBlur(){
    alert('Alertar blur');
  }

  cambiarImagen(){
    // Lo mejor es trabajar con constantes
    const calvo = "https://i.pinimg.com/736x/35/f3/bd/35f3bd1e00ef3c7c720895ea963f2d26.jpg";
    const homero = "http://static.t13.cl/images/original/2019/02/1550680682-1.jpg";

    if (this.url === calvo){
      this.url = homero;
      this.cambioHomero.emit(true);

    }else {
      this.url = calvo;
      this.cambioCalvo.emit(true);
    }

  }

}
