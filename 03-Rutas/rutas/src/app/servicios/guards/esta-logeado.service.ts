import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class EstaLogeadoService  implements CanActivate{

  constructor( private readonly _authService:AuthService, private readonly _router:Router) { }

  // No poner logica en este componente, si no buscar de otro servicio. En este caso se uso el de authservice
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Entrando a verificar si esta logeado');
    if(this._authService.estaLogeado){
      alert('Tienes permisos');
      return true
    }else {
      alert('No Tienes permisos');
      const url = ['/home','app'];
      this._router.navigate(url);
      return false;
    }
  }
}
