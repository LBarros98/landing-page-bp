const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=556791197412&text=Ol%C3%A1,%20quero%20falar%20com%20um%20advogado%20especialista%20em%20Direito%20de%20Fam%C3%ADlia.';

import Reveal from './Reveal';

const steps = [
  { num: '01', title: 'Atendimento Online', desc: 'Advogado preparado para entender e resolver o seu problema!' },
  { num: '02', title: 'Análise do Caso', desc: 'Analisaremos detalhadamente toda a sua situação.' },
  { num: '03', title: 'Documentação', desc: 'Solicitaremos os documentos necessários para garantir o seu direito.' },
  { num: '04', title: 'Início do Processo', desc: 'Imediatamente é iniciado os procedimentos em busca do seu direito.' },
];

export default function Steps() {
  return (
    <section id="etapas" className="steps">
      <div className="section__container">
        <Reveal>
          <h2 className="section__label">Etapas</h2>
          <h3 className="section__title">Como Funciona o Processo</h3>
        </Reveal>
        <Reveal stagger className="steps__grid">
          {steps.map((s) => (
            <article key={s.num} className="steps__card">
              <span className="steps__num">{s.num}</span>
              <h4 className="steps__title">{s.title}</h4>
              <p className="steps__desc">{s.desc}</p>
            </article>
          ))}
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
