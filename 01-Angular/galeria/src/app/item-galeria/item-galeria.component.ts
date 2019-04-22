import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CarritoService} from "../servicios/carrito/carrito.service";

// Este decorador crea el componente
@Component({
  selector: 'app-item-galeria', // Selector o nombre del compomente
  templateUrl: './item-galeria.component.html', // Ruta al template estructura
  styleUrls: ['./item-galeria.component.css'] // Ruta hacia los estilos del componente
})
// Exportar deja disponible la clase hacia otros archivos
export class ItemGaleriaComponent implements OnInit,OnDestroy {
  // Dependency
  // Injection
  // Injeccion de dependencias
  // SERVICIOS -> COMPONENTES
  // SERVICIOS -> SERVICIOS
  constructor(
    private readonly _carritoService:CarritoService
  ) {

  }


  title = 'Floreria';

  @Input() // Para poder llenar la variable nombreItem
  NombreItem:string;

  @Input()
  titulo;

  @Output()
  cambioCalvo:EventEmitter<boolean> = new EventEmitter();

  @Output()
  cambioHomero:EventEmitter<boolean> = new EventEmitter();

  url = "https://i.pinimg.com/736x/35/f3/bd/35f3bd1e00ef3c7c720895ea963f2d26.jpg";

  @Input()
  notas; //Productos

  @Input()
  textoBoton:string;



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


  ngOnInit() {
    console.log("Empezo");
    console.log(this._carritoService.carritoCompras);
  }

  ngOnDestroy(): void {
    console.log("Termino");
  }

  agregarCarrito(valorCarrito): void{
    const itemCarrito = {
      valor:valorCarrito,
      nombreTienda:this.titulo,
    };

    //this._carritoService.carritoCompras.splice(0,0,itemCarrito);
    this._carritoService.agregar_item(itemCarrito);
    console.log(this._carritoService.carritoCompras);
  }

  /*
  *   Ciclo de vida del componente
  *   ngOnInit -> OnInit -> Instancia
  *   ngOnDestroy -> OnDestroy
  * */


  /*
    -RUTA -> Login -> MODULOS/ETC
  *  PAPA [] -> hijo []-> hija
  *   HIJO [] -> nieto -> () -> papa
  *     NIETO -> () -> hijo
  *   HIJA
  *  TIO
  *   PRIMO
  * */

}
