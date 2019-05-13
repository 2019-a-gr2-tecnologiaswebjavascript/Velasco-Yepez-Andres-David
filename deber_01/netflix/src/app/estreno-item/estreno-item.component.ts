import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-estreno-item',
  templateUrl: './estreno-item.component.html',
  styleUrls: ['./estreno-item.component.css']
})
export class EstrenoItemComponent implements OnInit {

  @Input()
  nombre:string;
  @Input()
  duracion:string;
  @Input()
  categorias:string[];
  @Input()
  clasificacion:number;
  @Input()
  portadaUrl:string;
  @Input()
  descripcion:string;
  @Input()
  logo_titulo:string;



  constructor() { }

  ngOnInit() {
  }

}
