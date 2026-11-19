'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [['/', 'Home'], ['/sobre', 'Sobre Mim'], ['/projetos', 'Projetos'], ['/academica', 'Experiência Acadêmica'], ['/profissional', 'Experiência Profissional'], ['/contato', 'Contato']];

export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <nav aria-label="Navegação principal" onKeyDown={event => {
    if (event.key === 'Escape' && open) {
      setOpen(false);
      document.getElementById('menu-toggle')?.focus();
    }
  }}>
    <button id="menu-toggle" className="menu-toggle" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
      {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />} Menu
    </button>
    <ul id="menu" className={open ? 'nav is-open' : 'nav'}>{routes.map(([href, label]) =>
      <li key={href}><Link href={href} onClick={() => setOpen(false)} aria-current={path === href ? 'page' : undefined}>{label}</Link></li>
    )}</ul>
  </nav>;
}

const words = ['Silas Freitas', 'Designer gráfico', 'Programador Front-end', 'Designer UX/UI', 'Desenvolvedor'];

export function Typewriter() {
  const [frame, setFrame] = useState({ index: 0, length: words[0].length, deleting: true });
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || motion.matches) return;
    const word = words[frame.index];
    let next;
    let delay;
    if (frame.deleting && frame.length === word.length) {
      next = { ...frame, length: frame.length - 1 };
      delay = 1900;
    } else if (frame.deleting && frame.length === 0) {
      next = { index: (frame.index + 1) % words.length, length: 1, deleting: false };
      delay = 280;
    } else if (frame.length === word.length) {
      next = { ...frame, deleting: true };
      delay = 85;
    } else {
      next = { ...frame, length: frame.length + (frame.deleting ? -1 : 1) };
      delay = frame.deleting ? 43 : 76;
    }
    const timer = setTimeout(() => { if (!motion.matches) setFrame(next); }, delay);
    return () => clearTimeout(timer);
  }, [frame, paused]);

  return <>
    <h1 className="hero-title"><span className="sr-only">Silas Freitas</span><span className="static-name" aria-hidden="true">Silas Freitas</span><span className="typed" aria-hidden="true">{words[frame.index].slice(0, frame.length)}<span className="caret" data-paused={paused} /></span></h1>
    <button type="button" className="motion-toggle" onClick={() => setPaused(!paused)}>{paused ? 'Retomar animação' : 'Pausar animação'}</button>
  </>;
}