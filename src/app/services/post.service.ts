import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  arrPosts: Post[];
  arrCategorias: string[];

  constructor() {
    this.arrCategorias = [];

    this.arrPosts = [
      {
        id: 0,
        titulo: 'Los Apple MacBook Pro de 14" y 16" se retrasan',
        texto:
          'Si queríais compraros los futuros MacBook Pro durante estas navidades, tenemos malas noticias. Según apunta Bloomberg, los MacBook Pro de 14" y 16" con los renovados procesadores M2 se han retrasado. Inicialmente estaba previsto que Apple los mostrase durante el mes de noviembre, pero según la última información ahora el plan es lanzarlos a principios del año que viene, hacia el mes de marzo. ',
        autor: 'Bego',
        imagen: '/src/assets/imagens/0.jpg',
        fecha: new Date('12/12/2021'),
        categoria: 'Apple',
      },
      {
        id: 1,
        titulo: 'Lenguajes de programacion mas eficientes',
        texto:
          'La luz está tan cara que averiguar cuál es el lenguaje de programación más eficiente es una buena idea,¿Qué lenguaje de programación gasta menos luz? Un estudio realizado por investigadores portugueses ya trataba de dar respuesta a esa pregunta en 2017. En su análisis —el código utilizado está disponible en GitHub— consideraron tanto el uso de memoria como la energía consumida en la ejecución de un conjunto de programas especial. ',
        autor: 'Bego',
        imagen: '/src/assets/imagens/01.png',
        fecha: new Date('10/10/2022'),
        categoria: 'Developer',
      },
      {
        id: 2,
        titulo: 'Creative Cloud Express, diseño al alcance de todos ',
        texto:
          '¿Quieres crear un diseño atractivo pero herramientas como Photoshop, Illustrator y Premiere Pro exceden tu presupuesto o te parecen algo complicadas? Sin problema. Adobe acaba de lanzar Creative Cloud Express, una aplicación web y móvil gratuita cuya principal característica es que es muy intuitiva. La compañía asegura que con ella los usuarios podrán centrarse en los resultados y dejar de preocupare por los procesos. En otras palabras: podrás hacer buenos diseños en muy pocos pasos.',
        autor: 'Bego',
        imagen: '/src/assets/imagens/02.jpg',
        fecha: new Date('21/12/2021'),
        categoria: 'Diseño',
      },
      {
        id: 3,
        titulo: 'The Game Awards 2022 ya está aquí.',
        texto:
          ' Después de un año marcado por la pandemia que impidió la celebración presencial del evento —fue en digital conectando con tres ciudades diferentes—, la gala de premios más mediática del sector del videojuego se celebra en la madrugada del jueves 9 al viernes 10 de diciembre con el objetivo de celebrar la excelencia en el mundo del videojuego. Y sí, conoceremos el GOTY de este año, entre muchas otras categorías. Ahora bien ¿cuáles fueron los GOTY de ediciones anteriores? Repasamos todos los ganadores del evento bajo esta denominación, desde sus orígenes hasta 2022.',
        autor: 'Bego',
        imagen: '/src/assets/imagens/03.jpg',
        fecha: new Date('05/05/2022'),
        categoria: 'Games',
      },
      {
        id: 4,
        titulo:
          'Las Mejores Librerias de JavaScript para Aumentar la Productividad',
        texto:
          'Todos escribimos mucho código en nuestro día a día. A veces creamos aplicaciones enormes y otras veces nos pasamos el día escribiendo código para funciones sencillas que quizá no tengamos que programar en absoluto. Hay cientos de miles de bibliotecas para todo tipo de casos de uso, y el uso… ',
        autor: 'Bego',
        imagen: '/src/assets/imagens/04.jpg',
        fecha: new Date('08/08/2022'),
        categoria: 'Developer',
      },
      {
        id: 5,
        titulo: 'Apple podría estar preparando su propio metaverso',
        texto:
          'La manzana mordida está detrás del funcionamiento de una nueva infraestructura digital con la que rivalizar con la de Meta.',
        autor: 'Bego',
        imagen: '/src/assets/imagens/05.jpg',
        fecha: new Date('09/09/2022'),
        categoria: 'Apple',
      },
    ];
  }

  getAllCategorias(): string[] {
    this.arrCategorias = this.arrPosts.map((pPost) => pPost.categoria);
    return (this.arrCategorias = [...new Set(this.arrCategorias)]);
  }

  createPost(pPost: Post) {
    this.arrPosts.push(pPost);
    localStorage.setItem('blog', JSON.stringify(this.arrPosts));
    return (this.arrPosts = JSON.parse(localStorage.getItem('blog')!));
  }

  getByCategorias(categoria: string): Post[] {
    return this.arrPosts.filter((post) => post.categoria === categoria);
  }

  getById(pId: number): Post[] {
    if (localStorage.getItem('blog')) {
      this.arrPosts = JSON.parse(localStorage.getItem('blog')!);
    }
    return this.arrPosts.filter((post) => post.id === pId);
  }

  getAll(): Post[] {
    if (localStorage.getItem('blog')) {
      this.arrPosts = JSON.parse(localStorage.getItem('blog')!);
    }
    localStorage.setItem('blog', JSON.stringify(this.arrPosts));
    return (this.arrPosts = JSON.parse(localStorage.getItem('blog')!));
  }
}
