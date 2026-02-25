const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5551989247287&text=Ol%C3%A1.%20Gostaria%20de%20aux%C3%ADlio%20jur%C3%ADdico,%20poderia%20me%20ajudar%3F';

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
