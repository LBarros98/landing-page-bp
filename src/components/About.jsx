import bpFoto from '../assets/bp-foto.jpeg';

export default function About() {
  return (
    <section id="quem-somos" className="about">
      <div className="section__container about__inner">
        <h2 className="about__title">Quem vai te ajudar</h2>
        <div className="about__grid">
          <div className="about__content">
            <p className="about__lead">
              Meu nome é Vinícius da Silva Bezerra, sou advogado atuante em direito de família, entrei na faculdade de direito aos 15 anos, e aos 19 fui aprovado na OAB, me tornando o advogado mais novo do estado de Mato Grosso do Sul, e um dos mais novos do Brasil!
            </p>
            <p>
              Sou advogado e fundador do escritório VB advocacia, nosso escritório entende que as questões de Direito de Família são mais do que apenas disputas legais; são assuntos que afetam profundamente a vida das pessoas e suas relações familiares. Com uma dedicação inabalável a essa área do direito, nosso escritório se destaca por sua especialização e compromisso com os clientes.
            </p>
            <p>
              Nossos advogados altamente qualificados e experientes são especializados em questões de Direito de Família. Nosso objetivo é fornecer orientação jurídica especializada que permita aos nossos clientes tomar decisões acertivas.
            </p>
          </div>
          <div className="about__image-wrap">
            <img src={bpFoto} alt="Vinícius Bezerra - Advogado" className="about__image" />
          </div>
        </div>
      </div>
    </section>
  );
}
