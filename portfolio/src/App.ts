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
  <p>Lorem ipsilom</p>
  </div>
  `;
  container.appendChild(aboutSection);

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

  projectsGrid.appendChild(project1);
  projectsGrid.appendChild(project2);
  projectsGrid.appendChild(project3);
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
