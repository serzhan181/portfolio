import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Serzh | Frontend', // e.g: 'Name | Developer'
  lang: 'ru', // e.g: en, es, fr, jp
  description: 'frontend developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Serzhan',
  subtitle: "I'm  frontend developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'aboutme.webp',
  paragraphOne:
    "Hello, I'm Serzhan, from Kazakhstan. I've been learning front-end development since last year. Very excited to learn, develop my skills and knowledge in this fast-changing web world :)",
  paragraphTwo:
    'Привет! Меня зовут Сержан, я из Казахстана. Изучаю фронтенд уже почти год. Всегда рад учится полезным навыкам и расширять знания в этом прогрессивном мире веба :)',
  paragraphThree: ' ', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.png',
    title: 'Player app',
    info: 'Here you can search & play your favorite music, sample etc.',
    info2: 'Technologies: React, Next, Mobx, tailwindcss',
    url: 'https://meere.vercel.app',
    repo: 'https://github.com/serzhan181/Meere', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-2.png',
    title: 'Movie app',
    info:
      'Here you can search for primary data about movies, see the ratings, create articles in article section, read and rate them and comment on them.',
    info2: 'Technologies: React, react-router, mobx, express, typeorm, postgresql.',
    url: 'https://movie-opal.vercel.app/',
    repo: 'https://github.com/serzhan181/Movie', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-3.png',
    title: 'Drawing app',
    info:
      'This is more like of a game app. You can draw stuff online with your friends, or just with people around the internet. Unfortunately I couldnt deploy this due to the websocket related problems. But I\'m still wanting to, so maybe I will if I figure out how.',
    info2: 'Technologies: Vanilla JS, bulma.css, express',
    url: 'https://github.com/serzhan181/draw_me_please/',
    repo: 'https://github.com/serzhan181/draw_me_please/', // if no repo, the button will not show up  
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'serzhan181@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'telegram',
      url: 'https://t.me/serbaevvv',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/serzhan181',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
