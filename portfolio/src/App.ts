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
  <p>Lorem ipsilom</p>
  `;
  container.appendChild(aboutSection);

  //PROJECTS section
  const projects = document.createElement('section');
  projects.id = 'projects';
  projects.innerHTML = '<h2>Projects</h2>';

  const project1 = ProjectCard({
    image: '/images/yogurt.png',
    title: 'Project 1',
    description: 'Description for project 1',
    github: 'https://github.com/DulamaA/yogurt-project',
    tags: ['HTML', 'SCSS', 'Layout'],
  });

  const project2 = ProjectCard({
    image: '/images/weather.png',
    title: 'Weather App',
    description: 'Weather info using live API data.',
    github: 'https://github.com/DulamaA/weather-app',
    tags: ['JavaScript', 'API', 'Responsive'],
  });

  projects.appendChild(project1);
  projects.appendChild(project2);
  container.appendChild(projects);

  //CONTACT section
  const contactSection = document.createElement('section');
  contactSection.id = 'contact';
  contactSection.innerHTML = `
  <h2>Contact Me</h2>
  <p>  Email me at <a href="mailto:antoninanicolau@yahoo.com">antoninanicolau@yahoo.com</a></p>
  `;
  container.appendChild(contactSection);

  return container;
};

export default App;
