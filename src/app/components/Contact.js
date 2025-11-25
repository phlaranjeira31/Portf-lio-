
export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">contato</div>
      <h2 className="section-title">Vamos conversar?</h2>
      <p className="section-subtitle">
        Aberto a estágios, freelas, contatação PJ e projetos em desenvolvimento de software.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-text">
            Se você busca alguém com base sólida em lógica, curiosidade de
            pesquisador e vontade de aprender rápido, podemos trabalhar juntos.
            Gosto de entender o problema a fundo, propor soluções claras e
            construir iterando.
          </p>

          <div className="contact-links">
            <div>
              <strong>Email:</strong>{" "}
              <a href="pedrolaranjeira09@gmail.com">
                pedrolaranjeira09@gmail.com
              </a>
            </div>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="www.linkedin.com/in/pedro-henrique-laranjeira31"
                target="_blank"
                rel="noreferrer"
              >
                www.linkedin.com/in/pedro-henrique-laranjeira31
              </a>
            </div>
            <div>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/phlaranjeira31"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/phlaranjeira31
              </a>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <p className="contact-text">Como posso ajudar:</p>
          <ul className="contact-links contact-links-list">
            <li>• Criar ou melhorar aplicações web</li>
            <li>• Integrar IA em produtos existentes</li>
            <li>• Automatizar fluxos repetitivos</li>
            <li>• Prototipar sistemas e testar hipóteses</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

