const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';

export default function CTA() {
  return (
    <section className="cta-block">
      <div className="section__container cta-block__inner">
        <p className="cta-block__text">
          Entre em contato com um especialista em Direito Bancário, tire suas dúvidas e receba orientação jurídica para seu caso.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-block__btn"
        >
          Quero falar com um advogado
        </a>
      </div>
    </section>
  );
}
