import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';
import { useMediaQuery } from '../hooks/useMediaQuery';

const services = [
  {
    title: 'Divórcio',
    description: 'O divórcio dissolve o casamento pelas vias legais. Define a partilha dos bens, pensão alimentícia, guarda, visitação dos filhos, nome de casado e altera o estado civil.',
    items: ['Litigioso', 'Consensual', 'Cartório'],
  },
  {
    title: 'Guarda e Visitas',
    description: 'Com a separação dos pais surge a necessidade de regularizar judicialmente a guarda dos filhos, que poderá ser unilateral (materna ou paterna) ou compartilhada.',
    items: ['Unilateral', 'Compartilhada', 'Regulamentação de Visitas'],
  },
  {
    title: 'Pensão Alimentícia',
    description: 'A Pensão Alimentícia é o pagamento obrigatório feito para suprir as necessidades dos filhos ou do cônjuge.',
    items: ['Fixação e Revisão', 'Cobrança', 'Exoneração', 'Alimentos Gravídicos'],
  },
  {
    title: 'União Estável',
    description: 'A união estável pode existir independente do casal na mesma casa ou de documento escrito. Mas a regularização é determinante para evitar problemas ou mal-entendidos, pois diferente do namoro, ela gera direitos e deveres recíprocos, inclusive advindos de herança.',
    items: ['Reconhecimento', 'Dissolução', 'União em Cartório', 'Judicial'],
  },
  {
    title: 'Investigação de Paternidade',
    description: 'É um processo pelo qual um homem pode ser legalmente reconhecido como o pai de uma criança. Pode ser necessária para estabelecer direitos de visitação, para obter a custódia do filho, ou para estabelecer a obrigação do pai de fornecer suporte financeiro para o filho.',
    items: ['Investigação', 'Reconhecimento de Paternidade', 'Reconhecimento Sócio Afetivo'],
  },
  {
    title: 'Partilha de Bens',
    description: 'Apesar do marco para apuração dos bens ser o da separação de fato, a partilha é formalizada no divórcio ou na dissolução da união estável, conforme o caso. Em caso de morte, os bens são divididos através do inventário.',
    items: ['Partilha de Bens', 'Testamento', 'Inventário'],
  },
];

const AUTOPLAY_INTERVAL_MS = 10000;
const MOBILE_BREAKPOINT = 768;

export default function Services() {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
  const totalPages = isMobile ? services.length : 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef(null);
  const prevMobileRef = useRef(isMobile);

  useEffect(() => {
    if (prevMobileRef.current !== isMobile) {
      prevMobileRef.current = isMobile;
      if (isMobile) {
        setCurrentIndex((i) => Math.min(i * 3, services.length - 1));
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
    <section id="servicos" className="services">
      <div className="section__container">
        <Reveal>
          <h2 className="section__label">Serviços</h2>
          <h3 className="section__title">Veja como podemos te ajudar:</h3>
        </Reveal>

        <Reveal className="services__carousel-wrap">
          <div className="services__carousel">
            <button
              type="button"
              className="services__arrow services__arrow--prev"
              onClick={goPrev}
              aria-label="Página anterior"
            >
              ‹
            </button>

            <div className="services__viewport">
              <div
                className="services__track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {services.map((s) => (
                  <article key={s.title} className="services__slide">
                    <div className="services__card">
                      <h4 className="services__card-title">{s.title}</h4>
                      <p className="services__card-desc">{s.description}</p>
                      <ul className="services__card-list">
                        {s.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="services__arrow services__arrow--next"
              onClick={goNext}
              aria-label="Próxima página"
            >
              ›
            </button>
          </div>

          <div className="services__dots" role="tablist" aria-label="Páginas do carrossel">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Página ${i + 1}`}
                className={`services__dot ${i === currentIndex ? 'services__dot--active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
