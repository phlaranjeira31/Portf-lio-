export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">projetos</div>
      <h2 className="section-title">Projetos em que coloquei a mão na massa</h2>
      <p className="section-subtitle">
        Uma visão clara do tipo de solução que eu já desenvolvi: sistemas reais,
        automação e integrações com IA.
      </p>

      <div className="projects-grid">
        {/* PROJETO EM DESTAQUE */}
        <article className="project-card project-card-featured">
          <header className="project-card-header">
            <div>
              <h3 className="project-title">
                Sistema de Gestão – Loja TIM (Piabetá)
              </h3>
              <p className="project-meta">
                Projeto real · Fullstack · Em uso por time de loja
              </p>
            </div>
            <span className="project-badge">Projeto real</span>
          </header>

          <p className="project-description">
            Plataforma para controle de estoque, serviços e relatórios de uma
            loja TIM. Automatiza lançamentos, organização de produtos,
            classificação de serviços e acompanhamento do que foi feito em cada
            atendimento.
          </p>

          <div className="project-tags">
            <span className="project-tag-pill">Node.js</span>
            <span className="project-tag-pill">Express</span>
            <span className="project-tag-pill">React</span>
            <span className="project-tag-pill">MongoDB</span>
          </div>
        </article>

        {/* DEMAIS PROJETOS */}
        <article className="project-card">
          <header className="project-card-header">
            <div>
              <h3 className="project-title">CronoIA – Organizador inteligente</h3>
              <p className="project-meta">Assistente de rotina com IA</p>
            </div>
            <span className="project-badge project-badge-ia">IA</span>
          </header>

          <p className="project-description">
            Ferramenta que organiza a semana de estudos e trabalho a partir de
            comandos naturais do usuário. Gera cronogramas otimizados, blocos de
            foco e lembretes, integrando com agenda.
          </p>

          <div className="project-tags">
            <span className="project-tag-pill">IA (LLMs)</span>
            <span className="project-tag-pill">Node.js</span>
            <span className="project-tag-pill">APIs</span>
          </div>
        </article>

        <article className="project-card">
          <header className="project-card-header">
            <div>
              <h3 className="project-title">
                Diário Emocional com IA – Padrões de humor
              </h3>
              <p className="project-meta">
                Acompanhamento emocional com sugestões inteligentes
              </p>
            </div>
            <span className="project-badge project-badge-ia">IA</span>
          </header>

          <p className="project-description">
            Aplicativo em que o usuário registra como se sente e a IA analisa
            padrões de humor, sugerindo técnicas de relaxamento inspiradas em
            psicologia cognitivo-comportamental, além de gráficos de evolução.
          </p>

          <div className="project-tags">
            <span className="project-tag-pill">React</span>
            <span className="project-tag-pill">IA (LLMs)</span>
            <span className="project-tag-pill">Análise de texto</span>
          </div>
        </article>

        <article className="project-card">
          <header className="project-card-header">
            <div>
              <h3 className="project-title">Este portfólio</h3>
              <p className="project-meta">Next.js · Foco em performance</p>
            </div>
            <span className="project-badge">Frontend</span>
          </header>

          <p className="project-description">
            Portfólio desenvolvido em Next.js com layout responsivo, tema escuro
            e foco em clareza na apresentação dos projetos, habilidades e
            trajetória. Base para futuras melhorias e experimentos com animações
            e IA.
          </p>

          <div className="project-tags">
            <span className="project-tag-pill">Next.js</span>
            <span className="project-tag-pill">React</span>
            <span className="project-tag-pill">CSS</span>
          </div>
        </article>
      </div>
    </section>
  );
}
