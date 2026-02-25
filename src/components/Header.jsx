import { useState } from 'react';

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';

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
