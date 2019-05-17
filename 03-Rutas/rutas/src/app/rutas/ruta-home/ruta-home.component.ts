import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicios/auth/auth.service";

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})
export class RutaHomeComponent implements OnInit {

  constructor(private readonly _authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    alert('Esta entrando al sistema');
    this._authService.login('1234','adrian');
  }

  logout(){
    alert('Esta saliendo del sistema');
    this._authService.logout();
  }

}
