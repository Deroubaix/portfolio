import click from '../assets/clicked.png';
import baixa from '../assets/baixa.png';
import booze from '../assets/boozegames.png';
import heart from '../assets/heart.png';
import rick from '../assets/rickmorty.png';

export const CardData = [
  {
    title: 'Clicked',
    image: click,
    link: 'https://yourclicks.netlify.app',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam vestibulum lacus, vel tincidunt neque finibus at.',
    skills: ['MERN Stack', 'CSS'],
  },
  {
    title: 'Baixa',
    image: baixa,
    link: 'http://gbrlcsgn.github.io/Project-One',
    description:
      'Praesent at commodo magna. Maecenas a lectus eget nunc blandit tristique. Fusce consequat nisl orci, ut iaculis justo eleifend sit amet.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'BoozeGames',
    image: booze,
    link: 'https://theboozegames.com',
    description:
      'Praesent at commodo magna. Maecenas a lectus eget nunc blandit tristique. Fusce consequat nisl orci, ut iaculis justo eleifend sit amet.',
    skills: ['Shopify', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Rick and Morty API',
    image: rick,
    link: 'https://rickandmortyproject-api.netlify.app',
    description:
      'Praesent at commodo magna. Maecenas a lectus eget nunc blandit tristique. Fusce consequat nisl orci, ut iaculis justo eleifend sit amet.',
    skills: ['React', 'JavaScript', 'API', 'Bootstrap' ],
  },
  {
    title: 'Heart Movies',
    image: heart,
    link: 'http://heartmovies.cyclic.app',
    description:
      'Praesent at commodo magna. Maecenas a lectus eget nunc blandit tristique. Fusce consequat nisl orci, ut iaculis justo eleifend sit amet.',
    skills: ['Handlebars', 'JavaScript', 'Node.js'],
  },
];

