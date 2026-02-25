import { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const services = [
  {
    title: 'Análise de contratos bancários',
    description: 'É fundamental revisar contratos bancários assinados nos últimos 10 anos, mesmo que já estejam quitados. Muitas vezes, o consumidor pagou juros acima da média de mercado, tarifas indevidas ou foi vítima de venda casada sem sequer perceber. Com uma análise técnica especializada, é possível identificar irregularidades, calcular valores pagos a mais e verificar a viabilidade de ação judicial. Em caso de êxito, os valores podem ser devolvidos com correção monetária e juros.',
  },
  {
    title: 'Revisão de juros de empréstimos e financiamentos de veículo',
    description: 'Com uma análise prévia do contrato firmado com o banco ou instituição financeira, é possível identificar a existência de juros abusivos e cobranças indevidas no empréstimo ou financiamento. Confirmadas as irregularidades, é possível ingressar com ação judicial para reduzir a dívida, diminuir parcelas futuras e recuperar valores pagos a maior. Mesmo contratos já quitados ou refinanciados podem ser revisados, desde que firmados nos últimos 10 anos.',
  },
  {
    title: 'Cartão de Reserva de Margem Consignável (RMC)',
    description: 'O Cartão RMC é destinado a beneficiários do INSS, e frequentemente é oferecido como se fosse um empréstimo consignado comum. O consumidor acredita estar contratando um empréstimo com parcelas que quitam a dívida, quando na realidade se trata de um cartão de crédito. O valor é depositado na conta, porém o desconto mensal de 5% no benefício costuma cobrir basicamente juros e encargos, sem amortizar significativamente a dívida, que pode se tornar praticamente interminável. Quando comprovado que o cartão não foi utilizado como crédito rotativo, é possível buscar na Justiça a conversão em empréstimo consignado, com recálculo da dívida e compensação dos valores pagos.',
  },
];

const AUTOPLAY_INTERVAL_MS = 10000;

export default function Services() {
  const totalPages = services.length;
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
    <section id="servicos" className="services">
      <div className="section__container">
        <Reveal>
          <h2 className="section__label">Serviços</h2>
          <h3 className="section__title">Veja como podemos te ajudar</h3>
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
