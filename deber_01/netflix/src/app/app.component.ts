import { Component } from '@angular/core';
import {MovieInterface} from "./interfaces/movie-item-model";
import {ListaService} from "./servicios/lista/lista.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private readonly _listaService:ListaService){

  }

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
      'nombre':'Avengers EndGame',
      'descripcion':'Un calvo se vuelve presidente',
      'categorias':['accion','drama'],
      'duracion':'2h00',
      'clasificacion':13,
      'portadaUrl':'https://pulpfictioncine.com/download/multimedia.normal.a1078dc7561a9f2b.6176656e676572735f6e6f726d616c2e6a706567.jpeg'
    },
    {
      'nombre':'Avengers',
      'descripcion':'El live action de one puch man',
      'categorias':['accion','drama','gore'],
      'duracion':'23min',
      'clasificacion':18,
      'portadaUrl':'https://i.pinimg.com/originals/e8/44/ba/e844ba8daeeb18886b238484b699e94f.jpg'
    },
    {
      'nombre':'Spiderman',
      'descripcion':'La mitica serie de I-van',
      'categorias':['accion','drama','gore'],
      'duracion':'23min',
      'clasificacion':18,
      'portadaUrl':'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png/220px-Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png'
    },

  ];
}
