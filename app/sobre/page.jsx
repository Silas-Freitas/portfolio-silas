import { siAdobephotoshop, siAdobeillustrator, siAdobeindesign, siFigma, siAffinity, siHtml5, siCss3, siJavascript, siOpenjdk, siReact, siNodedotjs } from 'simple-icons';
import { BrandIcon } from '../brand-icon';

export const metadata = { title: 'Sobre Mim' };

const tools = [
  ['Design', [['Photoshop', siAdobephotoshop], ['Illustrator', siAdobeillustrator], ['InDesign', siAdobeindesign], ['Figma', siFigma], ['Affinity', siAffinity]]],
  ['Programação', [['HTML', siHtml5], ['CSS', siCss3], ['JavaScript', siJavascript], ['Java', siOpenjdk], ['React', siReact], ['Node.js', siNodedotjs]]],
];

const stack = [
  ['Next.js e React', 'Rotas, renderização, componentes e interação.'],
  ['JavaScript, HTML e CSS', 'Lógica, estrutura semântica, layout responsivo e transições.'],
  ['GitHub REST API', 'Consulta aos repositórios públicos na aba Programação.'],
  ['Lucide React e Simple Icons', 'Ícones da interface, perfis e ferramentas.'],
  ['Poppins e Archivo Variable', 'Fontes distribuídas localmente com Fontsource.'],
  ['Node.js e npm', 'Execução local e gerenciamento de dependências.'],
  ['Figma', 'Protótipo visual do portfólio.'],
];

export default function Sobre() {
  return <section className="page about reveal">
    <div className="about-intro">
      <img className="portrait" src="/portrait.webp" alt="Retrato de Silas Freitas" width="560" height="560" />
      <div className="bio">
        <h1>Sobre Mim</h1>
        <p>Curso Sistemas para Internet na Universidade Católica de Pernambuco (UNICAP) e Design Gráfico no Instituto Federal de Pernambuco (IFPE).</p>
        <p>Tenho interesse em front-end e design gráfico. Busco unir estética e funcionalidade, com foco na experiência do usuário. Também exploro desenvolvimento back-end, Java e Python para ampliar minha formação.</p>
      </div>
    </div>
    <section className="tools-section" aria-labelledby="tools-title">
      <h2 id="tools-title">Ferramentas utilizadas</h2>
      <div className="tool-groups">{tools.map(([group, entries]) => <section className="tool-group" key={group}>
        <h3>{group}</h3>
        <ul>{entries.map(([label, icon]) => <li key={label}><BrandIcon icon={icon} /><span>{label}</span></li>)}</ul>
      </section>)}</div>
    </section>
    <details className="stack-section">
      <summary>Tecnologias do site</summary>
      <dl className="stack">{stack.map(([name, detail]) => <div key={name}><dt>{name}</dt><dd>{detail}</dd></div>)}</dl>
    </details>
  </section>;
}
