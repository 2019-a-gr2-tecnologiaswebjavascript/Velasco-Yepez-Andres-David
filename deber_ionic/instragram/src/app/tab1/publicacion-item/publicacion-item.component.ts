import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publicacion-item',
  templateUrl: './publicacion-item.component.html',
  styleUrls: ['./publicacion-item.component.scss'],
})
export class PublicacionItemComponent implements OnInit {

  @Input()
  foto_perfil:string;
  @Input()
  nombre:string;
  @Input()
  foto_publicacion:string;
  @Input()
  desc_pub:string;
  @Input()
  fecha:string;


    constructor() { }

  ngOnInit() {}

}
