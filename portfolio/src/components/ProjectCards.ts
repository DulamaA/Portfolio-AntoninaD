interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  github: string;
  tags?: string[];
}

const ProjectCard = (props: ProjectCardProps): HTMLElement => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const tagHtml =
    props.tags?.map((tag) => `<span class="tag">${tag}</span>`).join(' ') || '';

  card.innerHTML = `
    <img src="${props.image}" alt="${props.title} preview" />
    <h3>${props.title}</h3>
    <p>${props.description}</p>
    <a href="${props.github}" target="_blank">View on GitHub</a>
    <div class="tags">${tagHtml}</div>
  `;

  return card;
};

export default ProjectCard;
