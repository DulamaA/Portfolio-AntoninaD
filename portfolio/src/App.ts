import Hero from './components/Hero';
import ProjectCard from './components/ProjectCards';

const App = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'app-wrapper';

  // Navigation
  const nav = document.createElement('nav');
  nav.className = 'top-nav';
  nav.innerHTML = `
  <a href="#hero">Home</a>
  <a href="#about">About me</a>
  <a href="#tech">Tech</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
`;
  container.appendChild(nav);

  //HERO section
  const heroSection = Hero();
  heroSection.id = 'hero';
  container.appendChild(heroSection);

  //ABOUT section
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  aboutSection.innerHTML = `
  <h2 class="section-title">About Me</h2>
  <div class= "about-content">
  <img src="/images/profile.jpg" alt="Antonina Dulama" class="profile-img"/>
  <p>My background is in project management with a Master's in European Business and Management. After becoming a parent, I decided to change paths and follow my passion for web development.</p>
  </div>
  `;
  container.appendChild(aboutSection);

  //TECH section
  const techSection = document.createElement('section');
  techSection.id = 'tech';

  const techTitle = document.createElement('h2');
  techTitle.textContent = 'Tech I Use';
  techTitle.className = 'section-title';

  const techTimeline = document.createElement('div');
  techTimeline.className = 'tech-timeline';

  const techs = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'SCSS',
    'Vite',
    'Git',
    'API',
  ];

  techs.forEach((tech, index) => {
    const techSpan = document.createElement('span');
    techSpan.textContent = tech;
    techTimeline.appendChild(techSpan);

    if (index < techs.length - 1) {
      const arrow = document.createElement('span');
      arrow.textContent = '→';
      techTimeline.appendChild(arrow);
    }
  });

  techSection.appendChild(techTitle);
  techSection.appendChild(techTimeline);
  container.appendChild(techSection);

  //PROJECTS section
  const projectsSection = document.createElement('section');
  projectsSection.id = 'projects';
  projectsSection.className = 'projects';
  projectsSection.innerHTML = '<h2 class="section-title">Projects</h2>';

  const projectsGrid = document.createElement('div');
  projectsGrid.className = 'project-grid';

  const project1 = ProjectCard({
    image: '/images/MarilynQuiz.jpg',
    title: 'Marilyn Quiz',
    description:
      'Marilyn quiz is a group project, from the JavaScript and Agile course. It is built with TypeSCript and includes an accessibility reviewed webpage. The quiz contains 20 questions with 3 answer choices each, and every game round consists of 10 random questions. It also features a timer and a confirmation dialog showing how many answers were correct at the end.',
    github: 'https://github.com/DulamaA/Marilyn-quiz-project',
    demo: 'https://dulamaa.github.io/Marilyn-quiz-project/',
  });

  const project2 = ProjectCard({
    image: '/images/WeatherApp.jpg',
    title: 'React Weather App',
    description:
      'React Weather App is a weather application built with React and TypeScript. It uses the OpenWeather API to fetch weather data and displays it in a user-friendly interface. The app includes features like location search, current weather conditions, and a 5-day forecast.',
    github: 'https://github.com/DulamaA/react-weather-app',
    demo: 'https://voluble-semolina-f179f7.netlify.app/',
  });

  const project3 = ProjectCard({
    image: '/images/BookAPI.jpg',
    title: 'Book-API',
    description:
      'Book-API is a group project and a full-stack web application for managing books, users, and reviews. It is built with Node.js, Express, and MongoDB for the backend, and VUE for the frontend. The application allows users to create an account, add books to their collection, and leave reviews. It also includes features like user authentication, book search, and a responsive design.',
    github: 'https://github.com/DulamaA/Book-API',
    demo: 'https://book-client-topaz.vercel.app/',
  });

  const project4 = ProjectCard({
    image: '/images/TheZoo.jpg',
    title: 'The Zoo',
    description:
      'The Zoo is a school project developed with React and TypeScript using React Router(layouts, child routes, error elements). Animals list and detail pages with image fallbacks, time-based feeding logic(3/4/5h), and state managed via Context + Reducer and a custom hook/service; styled with SCSS and subtle animations.',
    github: 'https://github.com/DulamaA/The-zoo',
    demo: 'https://dulamaa.github.io/The-zoo/',
  });

  const project5 = ProjectCard({
    image: '/images/Jobtech.png',
    title: 'JobTech-Page',
    description:
      'JobTech-Page is a group project using the JobTech Open Data API to build a student designed job portal for IT positions in Swedenn. Implements data fetching via Axios services, state and context management, routing, and graphical data visualization. Styled with a custom design system for accessibility and responsive layout.',
    github: 'https://github.com/DulamaA/Jobtech-Page',
    demo: 'https://jobtech-page.netlify.app/',
  });

  const project6 = ProjectCard({
    image: '/images/Gitland.jpg',
    title: 'Git-land-game',
    description:
      'My practice project: Git-Land is an interactive educational game that teaches Git step by step built with React + TypeScript, styled using Tailwind CSS, and bundled with Vite. Game progress is stored in localStorage so users can continue later.',
    github: 'https://github.com/DulamaA/git-land-game',
    demo: 'https://dulamaa.github.io/git-land-game/',
  });

  projectsGrid.appendChild(project1);
  projectsGrid.appendChild(project2);
  projectsGrid.appendChild(project3);
  projectsGrid.appendChild(project4);
  projectsGrid.appendChild(project5);
  projectsGrid.appendChild(project6);
  projectsSection.appendChild(projectsGrid);
  container.appendChild(projectsSection);

  //CONTACT section
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.innerHTML = `
  <h2>Contact Me</h2>
  <p>
  <i class="fas fa-envelope"></i>
  <a href="mailto:antoninanicolau@yahoo.com">antoninanicolau@yahoo.com</a>
</p>
<p>
  <i class="fab fa-linkedin"></i>
  <a href="https://www.linkedin.com/in/antonina-dulama-682a2aa5/" target="_blank">LinkedIn</a>
</p>
<p>
  <i class="fab fa-github"></i>
  <a href="https://github.com/DulamaA" target="_blank">GitHub</a>
</p>`;
  container.appendChild(contactSection);

  return container;
};

export default App;
