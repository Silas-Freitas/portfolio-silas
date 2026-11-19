import Link from 'next/link';
import { ArrowLeftRight, CodeXml, PanelsTopLeft } from 'lucide-react';
import { designProjects, projectNotes, social } from '../data';
import snapshot from './repos.json';
import { Carousel } from '../carousel';

export const metadata = { title: 'Projetos desenvolvidos' };

async function getRepositories() {
  try {
    const response = await fetch('https://api.github.com/users/Silas-Freitas/repos?type=owner&sort=pushed&per_page=100', {
      headers: { Accept: 'application/vnd.github+json' },
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(4500),
    });
    if (!response.ok) throw new Error('GitHub indisponível');
    const repos = await response.json();
    return { repos, cached: false };
  } catch {
    return { repos: snapshot, cached: true };
  }
}

export default async function Projetos({ searchParams }) {
  const code = (await searchParams).area === 'programacao';
  const result = code ? await getRepositories() : null;
  const repos = result?.repos.filter(repo => !repo.fork && !repo.archived && repo.name.toLowerCase() !== 'silas-freitas');
  return <section className="page projects" data-code={code}>
    <h1 className="reveal">Projetos</h1>
    <nav className="filters" aria-label="Categoria de projetos">
      <Link href="/projetos" scroll={false} aria-current={!code ? 'page' : undefined}>Design</Link>
      <ArrowLeftRight aria-hidden="true" />
      <Link href="/projetos?area=programacao" scroll={false} aria-current={code ? 'page' : undefined}>Programação</Link>
    </nav>
    <div className="reveal" key={code ? 'code' : 'design'}>
      {code ? <>
        {repos.length ? <Carousel label="Projetos de programação">{repos.map(repo => {
          const [title, note] = projectNotes[repo.name] ?? [repo.name, 'Descrição não publicada no GitHub.'];
          return <article className="panel project" key={repo.id}>
            <p className="tag"><CodeXml size={16} aria-hidden="true" /> {repo.language ?? 'Linguagem não informada'}</p>
            <h2>{title}</h2><p>{repo.description || note}</p>
            <a className="text-link" href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label={'Ver ' + title + ' no GitHub'}>Ver no GitHub</a>
          </article>;
        })}</Carousel> : <p>O perfil não tem repositórios públicos para exibir.</p>}
        <p className="source">{result.cached ? 'Exibindo a última cópia disponível dos repositórios.' : 'Dados consultados na API do GitHub.'}</p>
      </> : designProjects.length ? <Carousel label="Projetos de design">{designProjects.map(project => <article className="panel project design-project" key={project.url}>
        <img src={project.cover} alt={project.alt ?? ''} width="640" height="480" loading="lazy" />
        <div><h2>{project.title}</h2><a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={'Ver ' + project.title + ' no Behance'}>Ver no Behance</a></div>
      </article>)}</Carousel> : <div className="panel empty"><PanelsTopLeft aria-hidden="true" /><h2>Design no Behance</h2><p>Veja os projetos de design no meu perfil.</p><a className="button primary" href={social.Behance} target="_blank" rel="noopener noreferrer">Abrir Behance</a></div>}
    </div>
  </section>;
}