export default function Experience() {
  return (
    <section id="experience">
      <div className="section-label">experiência & formação</div>
      <h2 className="section-title">Trajetória acadêmica e projetos</h2>
      <p className="section-subtitle">
        Um resumo de onde estou vindo e o tipo de projeto em que já atuei.
      </p>

      <div className="experience-grid">
        <article className="experience-card">
          <div className="experience-tag">Acadêmico</div>
          <h3 className="experience-title">Estudante de Ciências da Computação e ADS</h3>
          <p className="experience-meta">Universidade</p>
          <p className="experience-description">
            Atualmente curso Ciência da Computação e ADS, onde desenvolvo uma base sólida em programação, estruturas de dados, algoritmos, banco de dados e desenvolvimento de software. Participo ativamente de projetos práticos que envolvem desenvolvimento web, integração com APIs, uso de IA e boas práticas de engenharia de software. Essa formação tem ampliado minha capacidade de resolver problemas, trabalhar com lógica, colaborar em equipe e criar soluções tecnológicas eficientes e escaláveis.
          </p>
        </article>

        <article className="experience-card">
          <div className="experience-tag">Projeto real</div>
          <h3 className="experience-title">
            Sistema de Gestão – Loja TIM (Piabetá)
          </h3>
          <p className="experience-meta">Fullstack · Node.js, React, MongoDB</p>
          <p className="experience-description">
            Desenvolvimento de um sistema para controle de estoque, serviços e
            relatórios de uma loja TIM. Foco em automatizar tarefas repetitivas
            e organizar informações de forma clara para o time.
          </p>
        </article>

        <article className="experience-card">
          <div className="experience-tag">IA & produtividade</div>
          <h3 className="experience-title">CronoIA e Diário Emocional</h3>
          <p className="experience-meta">Projetos pessoais · IA, LLMs</p>
          <p className="experience-description">
            Criação de assistentes com IA para organização de rotina e
            acompanhamento emocional do usuário, explorando análise de texto,
            geração de sugestões e interação natural com modelos de linguagem.
          </p>
        </article>

        <article className="experience-card">
          <div className="experience-tag">Aprendizado contínuo</div>
          <h3 className="experience-title">Autodidata em desenvolvimento</h3>
          <p className="experience-meta">
            Node.js · React · Banco de dados · Dev tools
          </p>
          <p className="experience-description">
            Estudos constantes em desenvolvimento web, boas práticas, controle
            de versão com Git e integração de IA em aplicações do dia a dia. 
          </p>
        </article>
      </div>
    </section>
  );
}
