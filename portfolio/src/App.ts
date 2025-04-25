import Hero from './components/Hero';
import ProjectCard from './components/ProjectCards';

const App = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'app-wrapper';

  //Add scroll navigation
  const scrollNav = document.createElement('nav');
  scrollNav.className = 'scroll-nav';
  scrollNav.innerHTML = `
  <a href="#hero">Home</a>
  <a href="#about">About me</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
  `;

  container.appendChild(scrollNav);

  //HERO section
  const heroSection = Hero();
  heroSection.id = 'hero';
  container.appendChild(heroSection);

  //ABOUT section
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  aboutSection.innerHTML = `
  <h2>About Me</h2>
  <div class= "about-content">
  <img src="/public/images/profile.jpg" alt="Antonina Dulama" class="profile-img"/>
  <p>My background is in project management with a Master's in European Business and Management. After becoming a parent, I decided to change paths and follow my passion for web development.</p>
  </div>
  `;
  container.appendChild(aboutSection);

  //TECH section
  const techSection = document.createElement('section');
  techSection.id = 'tech';

  const techTitle = document.createElement('h2');
  techTitle.textContent = 'Tech I Use';

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
  const projectsGrid = document.createElement('section');
  projectsGrid.id = 'projects';
  projectsGrid.className = 'project-grid';
  projectsGrid.innerHTML = '<h2>Projects</h2>';

  const project1 = ProjectCard({
    image: '/public/images/MarilynQuiz.jpg',
    title: 'Marilyn Quiz',
    description:
      'Marilyn quiz is a group project, from the JavaScript and Agile course. It is built with TypeSCript and includes an accessibility reviewed webpage. The quiz contains 20 questions with 3 answer choices each, and every game round consists of 10 random questions. It also features a timer and a confirmation dialog showing how many answers were correct at the end.',
    github: 'https://github.com/DulamaA/Marilyn-quiz-project',
  });

  const project2 = ProjectCard({
    image: '/public/images/Webbshop.jpg',
    title: 'Gottfrids Muffin Factory',
    description:
      'Gottfrids Muffin Factory is a webshopp built with JavaScript, HTML and CSS. Includes real time cart updates, product sorting, a checkout form with validation, payment method selection, discount logic, and accessibility features. Built as part of a school project, following clean code practices using ESlint and Prettier.',
    github: 'https://dulamaa.github.io/JS-Webbshop-project/',
  });

  const project3 = ProjectCard({
    image: '/public/images/WeatherApp.jpg',
    title: 'React Weather App',
    description:
      'React Weather App is a weather application built with React and TypeScript. It uses the OpenWeather API to fetch weather data and displays it in a user-friendly interface. The app includes features like location search, current weather conditions, and a 5-day forecast.',
    github: 'https://github.com/DulamaA/react-weather-app',
  });

  const project4 = ProjectCard({
    image: '/public/images/MelsDriveIn.jpg',
    title: 'Mels Drive In',
    description:
      'Mels drive-in project is a school assignment at Graphic tools course, where we developed a website about movies based on a design created by another group. The purpose of the project was to practice component-based development in Vue.js while collaborating with other people.',
    github: 'https://github.com/DulamaA/Graphic-tools-school-project',
  });

  projectsGrid.appendChild(project1);
  projectsGrid.appendChild(project2);
  projectsGrid.appendChild(project3);
  projectsGrid.appendChild(project4);
  container.appendChild(projectsGrid);

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
