import Hero from './components/Hero';
import ProjectCard from './components/ProjectCards';

const App = (): HTMLElement => {
  const container = document.createElement('div');
  container.className = 'app-wrapper';

  container.appendChild(Hero());

  // Create a section for the projects
  // and add the project cards to i
  const projects = document.createElement('section');
  projects.className = 'projects';

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

  return container;
};

export default App;
