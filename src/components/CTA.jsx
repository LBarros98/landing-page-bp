const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5551989247287&text=Ol%C3%A1.%20Gostaria%20de%20aux%C3%ADlio%20jur%C3%ADdico,%20poderia%20me%20ajudar%3F';

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
