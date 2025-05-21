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
    image: '/images/Webbshop.jpg',
    title: 'Gottfrids Muffin Factory',
    description:
      'Gottfrids Muffin Factory is a webshopp built with JavaScript, HTML and CSS. Includes real time cart updates, product sorting, a checkout form with validation, payment method selection, discount logic, and accessibility features. Built as part of a school project, following clean code practices using ESlint and Prettier.',
    github: 'https://dulamaa.github.io/JS-Webbshop-project/',
    demo: 'https://dulamaa.github.io/JS-Webbshop-project/',
  });

  const project3 = ProjectCard({
    image: '/images/WeatherApp.jpg',
    title: 'React Weather App',
    description:
      'React Weather App is a weather application built with React and TypeScript. It uses the OpenWeather API to fetch weather data and displays it in a user-friendly interface. The app includes features like location search, current weather conditions, and a 5-day forecast.',
    github: 'https://github.com/DulamaA/react-weather-app',
    demo: 'https://dulamaa.github.io/react-weather-app/',
  });

  const project4 = ProjectCard({
    image: '/images/MelsDriveIn.jpg',
    title: 'Mels Drive In',
    description:
      'Mels drive-in project is a school assignment at Graphic tools course, where we developed a website about movies based on a design created by another group. The purpose of the project was to practice component-based development in Vue.js while collaborating with other people.',
    github: 'https://github.com/DulamaA/Graphic-tools-school-project',
    demo: 'https://dulamaa.github.io/Graphic-tools-school-project/',
  });

  const project5 = ProjectCard({
    image: '/images/CodeSmells.jpg',
    title: 'Code-smells',
    description:
      'Code-smells is a project developed in JavaScript, HTML and CSS. It is a simple web application that helps users identify and understand common code smells in their code. The app provides explanations and examples of each code smell, along with tips on how to refactor the code to improve its quality.',
    github: 'https://github.com/DulamaA/Code-smells',
    demo: 'https://dulamaa.github.io/Code-smells/',
  });

  const project6 = ProjectCard({
    image: '/images/ToughCookie.jpg',
    title: 'Tough Cookie',
    description:
      'Tough Cookie is a school project developed in HTML and CSS. It is a client project where we had to create the design and layout of a website based on a given design. The project focuses on responsive design, accessibility, and clean code practices.',
    github: 'https://dulamaa.github.io/CSS-client-project/',
    demo: 'https://dulamaa.github.io/CSS-client-project/',
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
