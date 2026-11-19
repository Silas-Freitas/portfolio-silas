import Link from 'next/link';
import { Navigation } from './ui';
import '@fontsource/poppins/latin-400.css';
import '@fontsource/poppins/latin-500.css';
import '@fontsource/poppins/latin-600.css';
import '@fontsource-variable/archivo/standard.css';
import './style.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Silas Freitas | Portfólio', template: '%s | Silas Freitas' },
  description: 'Currículo e portfólio de Silas Freitas, com projetos de design e desenvolvimento front-end.',
  icons: { icon: '/icon.svg' },
};

export default function Layout({ children }) {
  return <html lang="pt-BR"><body>
    <a className="skip" href="#conteudo">Pular para o conteúdo</a>
    <header className="header"><div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Silas Freitas, início">sf<span>.</span></Link>
      <Navigation />
    </div></header>
    <main id="conteudo" tabIndex={-1} className="shell">{children}</main>
    <footer className="shell footer"><span>Silas Freitas</span><span>Design &amp; desenvolvimento</span><Link href="/contato">Contato</Link></footer>
  </body></html>;
}