import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.scss'],
})
export class UsuarioItemComponent implements OnInit {
  @Input()
  foto_perfil:string;
  @Input()
  nombre:string;
  @Input()
  nombre_real:string;
  constructor() { }

  ngOnInit() {}

}
