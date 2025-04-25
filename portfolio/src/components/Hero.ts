const Hero = (): HTMLElement => {
  const section = document.createElement('section');
  section.className = 'hero';
  section.innerHTML = `
    <h1>FrontEnd Developer Student - Antonina Dulama</h1>
    <p>I am studying at Medieinstitutet to become a frontend developer.</p>
    <a href="#contact" class="btn"> 👋 Let's connect</a>
  `;
  return section;
};

export default Hero;
