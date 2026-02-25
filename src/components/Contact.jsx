import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiMessage3Fill } from 'react-icons/ri';

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5551989247287&text=Ol%C3%A1.%20Gostaria%20de%20aux%C3%ADlio%20jur%C3%ADdico,%20poderia%20me%20ajudar%3F';
const INSTAGRAM_LINK = 'https://instagram.com/viniciusbezerra.adv';
const EMAIL = 'felipebarcelosadvocacia@hotmail.com';

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="section__container">
        <h2 className="section__label">Contato</h2>
        <h3 className="section__title">Fale conosco</h3>
        <p className="contact__intro">
          Atendimento direto com especialista para avaliar seu caso e indicar os
          melhores próximos passos.
        </p>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact__highlight">
          <span className="contact__highlight-icon" aria-hidden="true">
            <RiMessage3Fill />
          </span>
          <span className="contact__highlight-content">
            <strong>Precisa de orientação agora?</strong>
            <span>Fale no WhatsApp e tenha retorno rápido.</span>
          </span>
          <span className="contact__highlight-cta">Iniciar conversa</span>
        </a>

        <div className="contact__grid">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="contact__item">
            <span className="contact__icon" aria-hidden="true">
              <FaWhatsapp />
            </span>
            <span className="contact__item-content">
              <strong>WhatsApp</strong>
              <span>(51) 9 8924-7287</span>
            </span>
          </a>
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="contact__item">
            <span className="contact__icon" aria-hidden="true">
              <FaInstagram />
            </span>
            <span className="contact__item-content">
              <strong>Instagram</strong>
              <span>@adv.felipebarcelos</span>
            </span>
          </a>
          <a href={`mailto:${EMAIL}`} className="contact__item">
            <span className="contact__icon" aria-hidden="true">
              <MdEmail />
            </span>
            <span className="contact__item-content">
              <strong>E-mail</strong>
              <span>{EMAIL}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
