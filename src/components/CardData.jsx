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
      'An app that connects people based on things they have in common, not looks! Sign up and answer a questionnaire and see everyone you "Clicked" with.',
    skills: ['MERN Stack', 'CSS'],
  },
  {
    title: 'Baixa',
    image: baixa,
    link: 'http://gbrlcsgn.github.io/Project-One',
    git: 'https://github.com/Deroubaix/Project-One',
    description:
      'A simple web game. Jump and save yourself from all the obstacles that come your way. If you make contact with an obstacle you will loose a life... and get side effects.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
  },
  {
    title: 'The BoozeGames',
    image: booze,
    link: 'https://theboozegames.com',
    description:
      'The BoozeGames is a drinking game business and party brand. I updated both the website look and the checkout flow to make it more user friendly.',
    skills: ['Shopify', 'JavaScript', 'CSS', 'HTML'],
  },
  {
    title: 'Rick and Morty API',
    image: rick,
    link: 'https://rickandmortyproject-api.netlify.app',
    git: 'https://github.com/Deroubaix/project-rick',
    description:
      'The Rick and Morty API renders a responsive website with all the characters and episodes from the show Rick and Morty. Explore, see, and search your favorite characters, episodes, and cast members.',
      skills: ['React', 'JavaScript', 'API', 'Bootstrap' ],
  },
  {
    title: 'Heart Movies',
    image: heart,
    link: 'http://heartmovies.cyclic.app',
    git: 'https://github.com/Deroubaix/Heart-Movies',
    description:
      'Sign up, like a movie and check who else likes it. Create your favorite movies list and see who else liked them.',
    skills: ['Handlebars', 'JavaScript', 'Node.js'],
  },
];

