const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';

import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const steps = [
  { num: '01', title: 'Atendimento Online', desc: 'Estamos preparados para resolver o seu problema!' },
  { num: '02', title: 'Análise do caso', desc: 'Vamos analisar individualmente a sua situação' },
  { num: '03', title: 'Documentação', desc: 'Solicitação dos documentos necessários para garantir o seu direito' },
  { num: '04', title: 'Início do Processo', desc: 'Imediatamente é iniciado os procedimentos em busca do seu direito' },
  { num: '05', title: 'Acompanhamento', desc: 'Estaremos disponíveis durante todo o processo para te informar sobre cada etapa' },
];

const AUTOPLAY_INTERVAL_MS = 8000;

export default function Steps() {
  const totalPages = steps.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);

  const goPrev = () => {
    setCurrentIndex((p) => (p === 0 ? totalPages - 1 : p - 1));
  };

  const goNext = () => {
    setCurrentIndex((p) => (p === totalPages - 1 ? 0 : p + 1));
  };

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((p) => (p === totalPages - 1 ? 0 : p + 1));
    }, AUTOPLAY_INTERVAL_MS);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [totalPages]);

  return (
    <section id="etapas" className="steps">
      <div className="section__container">
        <Reveal>
          <h2 className="section__label">Etapas</h2>
          <h3 className="section__title">Como Funciona o Processo</h3>
        </Reveal>

        <Reveal className="steps__carousel-wrap">
          <div className="steps__carousel">
            <button
              type="button"
              className="steps__arrow steps__arrow--prev"
              onClick={goPrev}
              aria-label="Etapa anterior"
            >
              ‹
            </button>

            <div className="steps__viewport">
              <div
                className="steps__track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {steps.map((s) => (
                  <article key={s.num} className="steps__slide">
                    <div className="steps__card">
                      <span className="steps__num">{s.num}</span>
                      <h4 className="steps__title">{s.title}</h4>
                      <p className="steps__desc">{s.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="steps__arrow steps__arrow--next"
              onClick={goNext}
              aria-label="Próxima etapa"
            >
              ›
            </button>
          </div>

          <div className="steps__dots" role="tablist" aria-label="Etapas do processo">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Etapa ${i + 1}`}
                className={`steps__dot ${i === currentIndex ? 'steps__dot--active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="steps__cta-wrap">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Quero falar com um advogado
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
