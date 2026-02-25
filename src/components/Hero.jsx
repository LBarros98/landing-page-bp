const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">Escritório Especializado em Direito de Família</h1>
        <p className="hero__subtitle">
          Converse agora no WhatsApp com um especialista e tire todas as suas dúvidas.
        </p>
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
