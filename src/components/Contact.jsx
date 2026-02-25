const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';
const MAP_LINK = 'https://maps.app.goo.gl/jzTyHG7GAp22rT8UA';

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="section__container">
        <h2 className="section__label">Contato</h2>
        <h3 className="section__title">Fale conosco</h3>
        <div className="contact__grid">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact__item">
            <span className="contact__icon">📱</span>
            <span>(67) 9 9119-7412</span>
          </a>
          <a href="https://instagram.com/viniciusbezerra.adv" target="_blank" rel="noopener noreferrer" className="contact__item">
            <span className="contact__icon">📷</span>
            <span>@viniciusbezerraadv</span>
          </a>
          <a href="mailto:viniciusbezerra.adv@gmail.com" className="contact__item">
            <span className="contact__icon">✉️</span>
            <span>viniciusbezerra.adv@gmail.com</span>
          </a>
          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="contact__item">
            <span className="contact__icon">📍</span>
            <span>Rua Santa Helena, n. 520, Bairro Jardim Jacy, CEP 79006-380</span>
          </a>
        </div>
      </div>
    </section>
  );
}
