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

  peliculaEstreno={
    'nombre':'Star Wars IX',
    'descripcion':'No hay padres. No hay reglas. Un nuevo mundo les ofrece libertad ilimitada, pero la libertad conlleva sus riesgos.',
    'categorias':['accion','drama'],
    'duracion':'2h00',
    'clasificacion':12,
    'portadaUrl':'https://occ-0-1284-27.1.nflxso.net/art/fd1f9/b126a1d2cbd06f11958f13509f0cb193a8ffd1f9.webp',
    'logo_titulo':'https://occ-0-1284-27.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABSbpEvxJhLxhp8a50i3JTDqNdpSCy7QO1OvqtfQpv9ZJzamnN6dESfvj2pfFb-rXMP5F7iS7FAE9Q4kS8IeLXc9dx5b8Cg8_gbC6Fyj3XSRWMIfQrz89i08Vv2Kh6oWVLCqEVByPClDq-mQ3cd3tNfou1710Rww1yu-if0gF7C0hhY5ddzv5hbZGHRW0qGaAsM9dmSCDE6xmjdTEpO6qYCrz0iRDxgmIKYT-Xwyp90tQgSJIP0CzNstlqMvA5JhBYmPotA.webp',
  };
  arregloPeliculas:MovieInterface[]=[
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
      'portadaUrl':'https://occ-0-1284-27.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABWgfYiwAzvkzqoXp1Wc8J5pbz9MvyfhV5zDGkSfcos3wMhp4gzyu--D-1i28daxzPiBW7l2RqyvViJEcSviZ21fYdNtKV6Vg.webp?r=b31" alt="">'
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
      'nombre':'Spiderman',
      'descripcion':'La mitica serie de I-van',
      'categorias':['accion','drama','gore'],
      'duracion':'23min',
      'clasificacion':18,
      'portadaUrl':'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png/220px-Spider-Man_Into_the_Spider-Verse_%282018_poster%29.png'
    },

  ];
}
