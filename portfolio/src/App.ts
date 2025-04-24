const App = () => {
  const container = document.createElement('div');
  container.className = 'portfolio-wrapper';

  container.innerHTML = `
    <section class="hero">
      <h1>Antonina Dulama</h1>
      <p>Front-end developer från Vårgårda.</p>
      <a href="#contact" class="btn">Contact me</a>
    </section>
  `;

  return container;
};

export default App;
