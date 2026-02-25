import Reveal from './Reveal';

const items = [
  {
    title: 'Experiência',
    text: 'Profissionais com vivência em várias áreas do direito. Anos de prática jurídica colocados a sua disposição.',
  },
  {
    title: 'Agilidade',
    text: 'Decisões estratégicas para uma solução rápida do seu problema.',
  },
  {
    title: 'Qualidade',
    text: 'Uma equipe de profissionais atuando com integridade, transparência e dedicação.',
  },
];

export default function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="section__container">
        <Reveal>
          <h2 className="section__label">Diferenciais</h2>
        </Reveal>
        <Reveal stagger className="diferenciais__grid">
          {items.map((item) => (
            <article key={item.title} className="diferenciais__card">
              <h3 className="diferenciais__title">{item.title}</h3>
              <p className="diferenciais__text">{item.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
