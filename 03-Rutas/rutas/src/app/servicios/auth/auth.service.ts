import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado: boolean = false;
  roles = [];
  constructor(private readonly _router:Router) { }

  login(password:string, usuario:string){
    if(password === '1234' && usuario === 'adrian'){
      this.estaLogeado = true;
      const url = ['/creditos','1','2'];
      const parametros = {
        queryParams:{
          nombre:'adrian',
          apellido:'eguez',
          edad:25,
        }
      }
      this._router.navigate(url,parametros);
      return true;
    }else {
      return false;
    }
  }

  logout(){
    this.estaLogeado = false;
  }



}
