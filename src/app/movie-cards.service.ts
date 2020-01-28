import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieCardsService {

  public cards = [
    {
      content: 'Keep your friends close, but your enemies closer.',
      year: 1974,
      categories: ['Crime', 'Drama'],
      image_large_url: 'https://i.ytimg.com/vi/DfHJDLoGInM/hqdefault.jpg',
      image_thumb_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyFYb7t8Qoniyea8IlFDvte0hvB8wzPBQWenC8hV_oMUudfiWlAzDEXgW',
      rating: 1,
      movie: { title: 'The Godfather Part Ii', slug: 'the-godfather-part-ii' },
      character: { name: 'Michael Corleone', slug: 'michael-corleone' },
      actor: { name: 'Al Pacino', slug: 'al-pacino' }
    },
    {
      content: 'Say \'hello\' to my little friend!',
      year: 1983,
      categories: ['Crime', 'Drama'],
      image_large_url: 'https://i.ytimg.com/vi/a_z4IuxAqpE/maxresdefault.jpg',
      image_thumb_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiQEnHHPSvib02Te1fLCBaEyzMlkpK1Fomc7wFwu0lt6FZxv-gUavr6XeA',
      rating: 1,
      movie: { title: 'Scarface', slug: 'scarface' },
      character: { name: 'Tony Montana', slug: 'tony-montana' },
      actor: { name: 'Al Pacino', slug: 'al-pacino' }
    },
    {
      content: 'Attica! Attica!',
      year: 1975,
      categories: ['Crime', 'Drama'],
      image_large_url: 'https://i.ytimg.com/vi/lB6Gk5EtunI/maxresdefault.jpg',
      image_thumb_url:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqoqCXj79wy81IYW05vx6FPlsc9RIeBAeTKR37QKwRoFOaoxtBL0P8RR8',
      rating: 1,
      movie: { title: 'Dog Day Afternoon', slug: 'dog-day-afternoon' },
      character: { name: 'Sonny Wortzik', slug: 'sonny-wortzik' },
      actor: { name: 'Al Pacino', slug: 'al-pacino' }
    },
    {
      content:
        'I know it was you, Fredo. You broke my heart. You broke my heart.',
      year: 1974,
      categories: ['Crime', 'Drama'],
      image_large_url: 'https://i.ytimg.com/vi/DjUOBVAbGhQ/maxresdefault.jpg',
      image_thumb_url:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmMdvXj_n5yv35xvfK1HniKaYEK6b0QE9HUxMjKmrRc2qp0GOy22OcZq8',
      rating: 1,
      movie: {
        title: 'The Godfather: Part Ii',
        slug: 'the-godfather-part-ii-8827cf36-df5f-4db6-8edb-bd6beb4a0928'
      },
      character: { name: 'Michael Corleone', slug: 'michael-corleone' },
      actor: { name: 'Al Pacino', slug: 'al-pacino' }
    },
    {
      content: 'Keep your friends close, but your enemies closer.',
      year: 1974,
      categories: ['Crime', 'Drama'],
      image_large_url: 'https://i.ytimg.com/vi/DfHJDLoGInM/hqdefault.jpg',
      image_thumb_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyFYb7t8Qoniyea8IlFDvte0hvB8wzPBQWenC8hV_oMUudfiWlAzDEXgW',
      rating: 1,
      movie: {
        title: 'The Godfather: Part Ii',
        slug: 'the-godfather-part-ii-8827cf36-df5f-4db6-8edb-bd6beb4a0928'
      },
      character: { name: 'Michael Corleone', slug: 'michael-corleone' },
      actor: { name: 'Al Pacino', slug: 'al-pacino' }
    },
    {
      content: 'Hoo-ah!',
      year: 1992,
      categories: ['Drama'],
      image_large_url: 'https://i.ytimg.com/vi/Itr0jcR0S4s/maxresdefault.jpg',
      image_thumb_url:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSe3miWHAXxWJ8v71kwhcbbaukhOJc3bQmZ4KSOnWdHLgSFKzRrC6mVx5dy',
      rating: 1,
      movie: { title: 'Scent Of A Woman', slug: 'scent-of-a-woman' },
      character: { name: 'Lt. Col. Frank Slade', slug: 'lt-col-frank-slade' },
      actor: { name: 'Al Pacino', slug: 'al-pacino' }
    }
  ];

  constructor() { }
}
