import bpFoto from '../assets/bp-foto.jpeg';

export default function About() {
  return (
    <section id="quem-somos" className="about">
      <div className="section__container about__inner">
        <h2 className="about__title">Quem vai te ajudar</h2>
        <div className="about__grid">
          <div className="about__content">
            <p className="about__lead">
            Meu nome é Felipe Barcelos, sou advogado especializado em revisão de empréstimos bancários e financiamentos de veículos. Pós-graduado em Direito Processual Civil pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS), atuo na análise técnica de contratos para identificar juros abusivos, cobranças indevidas e cláusulas contratuais irregulares, sempre com foco na redução de dívidas e na recuperação de valores pagos a maior pelo consumidor.
            </p>
            <p className="about__lead">
            Muitos consumidores passam anos pagando parcelas sem perceber que estão sendo prejudicados por juros abusivos e cobranças indevidas. A sensação de que a dívida nunca diminui, mesmo com pagamentos em dia, gera angústia, insegurança e impacto direto no orçamento familiar. A revisão contratual é essencial para interromper esse ciclo, corrigir excessos e devolver ao consumidor o controle da própria vida financeira.
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
