const Hero = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <h1>Frontend Developer - Antonina Dulama</h1>
    <p>Frontend developer passionate about building modern and user-friendly web applications with React, TypeScript and modern frontend technologies.</p>
    <a href="#contact" class="btn"> 👋 Let's connect</a>
  `;
  return section;
};

export default Hero;
