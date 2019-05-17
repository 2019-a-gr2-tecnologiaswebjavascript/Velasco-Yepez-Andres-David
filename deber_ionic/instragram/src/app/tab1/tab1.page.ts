import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    publicaciones = [
        {
            foto_perfil:'https://i.blogs.es/b47fb7/1366_2000-3/450_1000.jpg',
            nombre:'markZucaritas21',
            foto_publicacion:'https://ihg.scene7.com/is/image/ihg/crowne-plaza-new-york-5693607104-4x3',
            desc_pub:'he llegado a mi destino',
            fecha:'24-Abril',
        },
        {
            foto_perfil:'https://pbs.twimg.com/profile_images/3596973137/9bdb50c19041d7867f2bece0539c3630.jpeg',
            nombre:'ivan-024',
            foto_publicacion:'https://vignette.wikia.nocookie.net/bobesponja/images/5/51/Pizza_Crust%C3%A1ceo_Crujiente.jpg/revision/latest?cb=20150217174049',
            desc_pub:'la mejor pizza',
            fecha:'2-Abril',
        },
    ];
    estados = [
        {
            foto_perfil:'https://i.blogs.es/b47fb7/1366_2000-3/450_1000.jpg',
            nombre:'markZucaritas21',
        },
        {
            foto_perfil:'https://pbs.twimg.com/profile_images/3596973137/9bdb50c19041d7867f2bece0539c3630.jpeg',
            nombre:'ivan-024',
        },
        {
            foto_perfil:'https://pbs.twimg.com/profile_images/3596973137/9bdb50c19041d7867f2bece0539c3630.jpeg',
            nombre:'ivan-024',
        }
    ];


}
