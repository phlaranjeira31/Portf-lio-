export default function Skills() {
  return (
    <section id="skills">
      <div className="section-label">habilidades</div>
      <h2 className="section-title">Stack técnica & ferramentas</h2>
      <p className="section-subtitle">
        Tecnologias que já uso no dia a dia e áreas em que estou me aprofundando.
      </p>

      <div className="skills-grid">
        {}
        <article className="skill-card skill-card-featured">
          <h3 className="skill-title">Stack principal</h3>
          <p className="skill-description">
            Foco em desenvolvimento web fullstack, construindo APIs, interfaces e
            integrações com bancos de dados e serviços externos.
          </p>
          <div className="skill-tags">
            <span className="skill-tag-pill">JavaScript</span>
            <span className="skill-tag-pill">Node.js</span>
            <span className="skill-tag-pill">TypeScript</span>
            <span className="skill-tag-pill">React</span>
            <span className="skill-tag-pill">Next.js</span>
          </div>
        </article>

        {}
        <article className="skill-card">
          <h3 className="skill-title">Backend & APIs</h3>
          <p className="skill-description">
            Criação de APIs REST, autenticação, regras de negócio e integração
            entre serviços.
          </p>
          <div className="skill-tags">
            <span className="skill-tag-pill">Node.js</span>
            <span className="skill-tag-pill">Express</span>
            <span className="skill-tag-pill">REST</span>
          </div>
        </article>

        <article className="skill-card">
          <h3 className="skill-title">Frontend & UX</h3>
          <p className="skill-description">
            Interfaces responsivas, foco em clareza, leitura agradável e usabilidade.
          </p>
          <div className="skill-tags">
            <span className="skill-tag-pill">React</span>
            <span className="skill-tag-pill">Next.js</span>
            <span className="skill-tag-pill">HTML</span>
            <span className="skill-tag-pill">CSS</span>
          </div>
        </article>

        <article className="skill-card">
          <h3 className="skill-title">Bancos de dados</h3>
          <p className="skill-description">
            Organização de dados, modelagem simples e comunicação segura com o backend.
          </p>
          <div className="skill-tags">
            <span className="skill-tag-pill">MongoDB</span>
            <span className="skill-tag-pill">SQL</span>
          </div>
        </article>

        <article className="skill-card">
          <h3 className="skill-title">IA & automação</h3>
          <p className="skill-description">
            Uso de modelos de linguagem em apps reais, automação de tarefas e
            integrações com APIs de IA.
          </p>
          <div className="skill-tags">
            <span className="skill-tag-pill">Python</span>
            <span className="skill-tag-pill">APIs de IA</span>
          </div>
        </article>

        <article className="skill-card">
          <h3 className="skill-title">Ferramentas & soft skills</h3>
          <p className="skill-description">
            Ferramentas que uso no dia a dia e habilidades de colaboração.
          </p>
          <div className="skill-tags">
            <span className="skill-tag-pill">Git & GitHub</span>
            <span className="skill-tag-pill">VS Code</span>
            <span className="skill-tag-pill">Linux / Windows </span>
            <span className="skill-tag-pill">Comunicação</span>
            <span className="skill-tag-pill">Trabalho em equipe</span>
          </div>
        </article>
      </div>
    </section>
  );
}
