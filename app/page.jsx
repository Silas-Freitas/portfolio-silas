import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Typewriter } from './ui';

export default function Home() {
  return <section className="hero reveal">
    <p className="hero-intro" aria-hidden="true">sou</p>
    <Typewriter />
    <div className="actions">
      <Link className="button primary" href="/projetos">Ver Projetos <ArrowRight aria-hidden="true" /></Link>
      <Link className="button" href="/sobre">Sobre Mim</Link>
    </div>
  </section>;
}
