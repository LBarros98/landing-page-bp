const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';

import bgImage from '../assets/bg-image.jpeg';

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__inner">
        <h1 className="hero__title">Atuação especializada em revisão de contratos bancários</h1>
        <p className="hero__subtitle">
        Acredita que está pagando mais juros do que deveria? Converse agora no WhatsApp com um especialista e solicite uma análise do seu caso        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hero__cta"
        >
          Quero falar com um advogado
        </a>
      </div>
    </section>
  );
}
