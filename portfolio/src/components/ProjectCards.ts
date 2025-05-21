interface ProjectProps {
  image: string;
  title: string;
  description: string;
  github: string;
  demo?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  github,
  demo,
}: ProjectProps): HTMLElement => {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
    <img src="${image}" alt="${title}" />
    <h3>${title}</h3>
    <p>${description}</p>
    <div class="project-links">
      ${demo ? `<a href="${demo}" target="_blank">Live Demo</a>` : ''}
      <a href="${github}" target="_blank">GitHub</a>
    </div>
  `;

  return card;
};

export default ProjectCard;
