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
    git: 'https://github.com/Deroubaix/clicked-client',
    description:
      'An app that connects people based on things you have in commom. Sign up and answer a questionnaire and see everyone you "Clicked" with.',
    skills: ['MERN Stack', 'CSS'],
  },
  {
    title: 'Baixa',
    image: baixa,
    link: 'http://gbrlcsgn.github.io/Project-One',
    git: 'https://github.com/Deroubaix/Project-One',
    description:
      'A simple web game. Jump and save yourself from all the obsticles that comes your way, if in contact with a obsticle you will get side effects.',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'BoozeGames',
    image: booze,
    link: 'https://theboozegames.com',
    description:
      'Is a website to buy THE booze game. I updated how the website looked to make it more user friendly.',
    skills: ['Shopify', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Rick and Morty API',
    image: rick,
    link: 'https://rickandmortyproject-api.netlify.app',
    git: 'https://github.com/Deroubaix/project-rick',
    description:
      'The Rick and Morty API renders a responsive website with all characters and episodes from the show. Explore and see and search your favorite characters episodes and episodes cast.',
      skills: ['React', 'JavaScript', 'API', 'Bootstrap' ],
  },
  {
    title: 'Heart Movies',
    image: heart,
    link: 'http://heartmovies.cyclic.app',
    git: 'https://github.com/Deroubaix/Heart-Movies',
    description:
      'Sign up, like and check who likes it. Create your favorite movies list and see who else liked them.',
    skills: ['Handlebars', 'JavaScript', 'Node.js'],
  },
];

