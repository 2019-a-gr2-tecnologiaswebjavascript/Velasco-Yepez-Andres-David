import { Component } from '@angular/core';
import {MovieInterface} from "./interfaces/movie-item-model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflix';
  arregloPeliculas:MovieInterface[]=[
    {
      'nombre':'Milagros Inesperados',
      'descripcion':'Un calvo se vuelve presidente',
      'categorias':['accion','drama'],
      'duracion':'2h00',
      'clasificacion':13,
      'portadaUrl':'https://pbs.twimg.com/media/BoRFGe7IgAA0W4o.png'
    },
    {
      'nombre':'One Puch Man',
      'descripcion':'El live action de one puch man',
      'categorias':['accion','drama','gore'],
      'duracion':'23min',
      'clasificacion':18,
      'portadaUrl':'https://pbs.twimg.com/media/CRh9o04U8AA7xtt.jpg'
    },
    {
      'nombre':'I-van',
      'descripcion':'La mitica serie de I-van',
      'categorias':['accion','drama','gore'],
      'duracion':'23min',
      'clasificacion':18,
      'portadaUrl':'https://storage.gra1.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/avatars/tH/tHXAbDZbJcaJQutf.jpeg'
    },
    {
      'nombre':'Milagros Inesperados',
      'descripcion':'Un calvo se vuelve presidente',
      'categorias':['accion','drama'],
      'duracion':'2h00',
      'clasificacion':13,
      'portadaUrl':'https://pbs.twimg.com/media/BoRFGe7IgAA0W4o.png'
    },
    {
      'nombre':'One Puch Man',
      'descripcion':'El live action de one puch man',
      'categorias':['accion','drama','gore'],
      'duracion':'23min',
      'clasificacion':18,
      'portadaUrl':'https://pbs.twimg.com/media/CRh9o04U8AA7xtt.jpg'
    },
    {
      'nombre':'I-van',
      'descripcion':'La mitica serie de I-van',
      'categorias':['accion','drama','gore'],
      'duracion':'23min',
      'clasificacion':18,
      'portadaUrl':'https://storage.gra1.cloud.ovh.net/v1/AUTH_296c7803aa594af69d39b970927c8fb9/media/avatars/tH/tHXAbDZbJcaJQutf.jpeg'
    },

  ];
}
