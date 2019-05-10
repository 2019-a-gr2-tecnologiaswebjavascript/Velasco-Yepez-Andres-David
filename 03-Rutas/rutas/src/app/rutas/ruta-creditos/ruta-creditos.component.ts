import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruta-creditos',
  templateUrl: './ruta-creditos.component.html',
  styleUrls: ['./ruta-creditos.component.css']
})
export class RutaCreditosComponent implements OnInit {

  constructor(private readonly _activateRoute:ActivatedRoute) { }

  ngOnInit() {
    const parametros$ = this._activateRoute.params;
    // El signo de dolar significa q esa variable es un observable
    // Parametros de ruta
    parametros$.subscribe( // Estamos suscritos a esos cambios
      (parametros)=>{ // Ok TRY
        console.log('Parametros: ', parametros); //Para los parametros de ruta
      },(error)=>{ // :( CATCH
        console.log('Error: ', error);
      },
      ()=>{ // Completado FINALLY -> OPCIONAL
        console.log('completo');
      }
    );

    // Parametros de consulta
    const parametrosConsulta$ = this._activateRoute.queryParams;
    // Estos parametros no necesitan el catch y el complete porque son especiales
    parametrosConsulta$.subscribe( // Estamos suscritos a esos cambios
      (parametros)=>{ // Ok TRY
        console.log('Parametros Consulta: ', parametros); //Para los parametros de ruta
      }
    );

  }

}
