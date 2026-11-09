# Felipe Barcelos Advocacia — Landing Page

Landing page institucional para apresentação de serviços jurídicos com foco em **Direito Bancário**, desenvolvida com React e Vite.

## Funcionalidades

- Apresentação do escritório e de sua atuação;
- Carrossel de serviços: análise de contratos bancários, revisão de juros de empréstimos e financiamentos e cartão RMC;
- Etapas do atendimento em carrossel;
- Contato via WhatsApp, Instagram e e-mail;
- Menu responsivo e animações de entrada com `IntersectionObserver`.

## Tecnologias

- React 19 e React DOM;
- Vite 7;
- JavaScript (JSX) e CSS;
- React Icons;
- ESLint 9.

## Como executar

É necessário ter Node.js compatível com o Vite 7 e npm instalados.

```bash
git clone https://github.com/LBarros98/landing-page-bp.git
cd landing-page-bp
npm install
npm run dev
```

Abra o endereço local informado pelo Vite (normalmente `http://localhost:5173`).

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Pré-visualiza o build |
| `npm run lint` | Executa o ESLint |

## Estrutura

```text
src/
├── assets/             # Imagens e recursos visuais
├── components/         # Seções da landing page e componentes de animação
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── CTA.jsx
│   ├── About.jsx
│   ├── Steps.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Reveal.jsx
├── hooks/
│   └── useMediaQuery.js
├── App.jsx             # Composição da página
├── App.css
├── index.css
└── main.jsx
```

Os componentes `Depoimentos.jsx` e `Diferenciais.jsx` também existem no repositório, mas não estão sendo exibidos pela composição atual em `App.jsx`.

## Personalização e manutenção

- **Textos e serviços:** `src/components/Hero.jsx` e `src/components/Services.jsx`.
- **Links de contato:** `Header.jsx`, `Hero.jsx`, `CTA.jsx`, `Steps.jsx` e `Contact.jsx`.
- **Estilos:** `src/index.css` e `src/App.css`.
- **Título, descrição e favicon:** `index.html`.

> **Pontos a revisar antes da publicação:** a descrição em `index.html` menciona Direito de Família, embora a página apresente Direito Bancário. Em `Contact.jsx`, o endereço do Instagram também difere do identificador exibido. Confirme os dados corretos antes de alterá-los.

## Publicação

Execute `npm run build` e publique o conteúdo gerado em `dist/` em uma hospedagem compatível com sites estáticos.

---

Repositório: [LBarros98/landing-page-bp](https://github.com/LBarros98/landing-page-bp).
