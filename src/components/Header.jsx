import { useState } from 'react';

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5551989247287&text=Ol%C3%A1.%20Gostaria%20de%20aux%C3%ADlio%20jur%C3%ADdico,%20poderia%20me%20ajudar%3F';

import headerLogo from '../assets/header-logo.jpeg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo">
          <img src={headerLogo} alt="Logo" />
        </a>
        <button
          type="button"
          className="header__menu-btn"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#quem-somos" onClick={() => setMenuOpen(false)}>Quem somos</a>
          <a href="#etapas" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#depoimentos" onClick={() => setMenuOpen(false)}>Depoimentos</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="header__cta">
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
