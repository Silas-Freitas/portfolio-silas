'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Carousel({ children, label }) {
  const track = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  useEffect(() => {
    const element = track.current;
    const update = () => setEdges({
      start: element.scrollLeft < 2,
      end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 2,
    });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      observer.disconnect();
      element.removeEventListener('scroll', update);
    };
  }, []);

  function move(direction) {
    const element = track.current;
    const first = element.firstElementChild;
    if (!first) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    element.scrollBy({ left: direction * (first.getBoundingClientRect().width + gap), behavior });
  }

  return <div className="carousel">
    <div className="project-track" ref={track} tabIndex={0} role="region" aria-label={label}>{children}</div>
    <div className="carousel-controls" hidden={edges.start && edges.end}>
      <button type="button" disabled={edges.start} onClick={() => move(-1)} aria-label="Projeto anterior"><ChevronLeft aria-hidden="true" /></button>
      <button type="button" disabled={edges.end} onClick={() => move(1)} aria-label="Próximo projeto"><ChevronRight aria-hidden="true" /></button>
    </div>
  </div>;
}
