import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { useMediaQuery } from '../hooks/useMediaQuery';

const depoimentos = [
  { initial: 'F', name: 'Fernando Agnaldo', date: '13/05/2023', text: 'Ótimo Profissional.' },
  { initial: 'P', name: 'Paulo Gomes', date: '27/01/2023', text: 'Excelente profissional recomendo!!!' },
  { initial: 'M', name: 'Mariana Dias', date: '09/04/2023', text: 'Um ótimo profissional, atencioso, foi muito prestativo para resolver e esclarecer todas minhas dúvidas dentro do processo. Um profissional muito idôneo. Recomendo sempre! Sucesso na sua profissão.' },
  { initial: 'G', name: 'Gabriel Rodrigues', date: '23/10/2022', text: 'Tudo perfeito, a começar pelo atendimento perfeito, tudo com muita transparência, seriedade, competência e rapidez, muito top!!!' },
  { initial: 'C', name: 'Claudia Silvana', date: '02/12/2022', text: 'Estou extremamente satisfeito com os serviços do advogado. Ele não só me recebeu com respeito e empatia, mas também se destacou pela clareza ao comunicar-se sobre os detalhes do meu caso.' },
  { initial: 'J', name: 'Júlia Santana', date: '10/10/2022', text: 'Agradeço sinceramente ao advogado pelo profissionalismo demonstrado durante todo o processo. O que mais aprecio é o feedback construtivo que ele proporcionou em relação à minha situação.' },
];

const AUTOPLAY_INTERVAL_MS = 10000;
const MOBILE_BREAKPOINT = 768;

export default function Depoimentos() {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const totalPages = isMobile ? depoimentos.length : 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);
  const prevMobileRef = useRef(isMobile);

  useEffect(() => {
    if (prevMobileRef.current !== isMobile) {
      prevMobileRef.current = isMobile;
      if (isMobile) {
        setCurrentIndex((i) => Math.min(i * 3, depoimentos.length - 1));
      } else {
        setCurrentIndex((i) => Math.floor(i / 3));
      }
    }
  }, [isMobile]);

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
    <section id="depoimentos" className="depoimentos">
      <div className="section__container">
        <Reveal>
          <h2 className="section__label">Depoimentos</h2>
          <h3 className="section__title">Avaliação dos Clientes</h3>
        </Reveal>

        <Reveal className="depoimentos__carousel-wrap">
          <div className="depoimentos__carousel">
            <button
              type="button"
              className="depoimentos__arrow depoimentos__arrow--prev"
              onClick={goPrev}
              aria-label="Página anterior"
            >
              ‹
            </button>

            <div className="depoimentos__viewport">
              <div
                className="depoimentos__track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {depoimentos.map((d) => (
                  <article key={d.name} className="depoimentos__slide">
                    <div className="depoimentos__card">
                      <div className="depoimentos__avatar">{d.initial}</div>
                      <h4 className="depoimentos__name">{d.name}</h4>
                      <time className="depoimentos__date">{d.date}</time>
                      <p className="depoimentos__text">{d.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="depoimentos__arrow depoimentos__arrow--next"
              onClick={goNext}
              aria-label="Próxima página"
            >
              ›
            </button>
          </div>

          <div className="depoimentos__dots" role="tablist" aria-label="Páginas dos depoimentos">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Página ${i + 1}`}
                className={`depoimentos__dot ${i === currentIndex ? 'depoimentos__dot--active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
