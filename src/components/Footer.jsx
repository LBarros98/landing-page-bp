const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {year} Felipe Barcelos – Advocacia e Consultoria. Direito Bancário.
        </p>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="footer__whatsapp">
          Falar no WhatsApp
        </a>
      </div>
    </footer>
  );
}
