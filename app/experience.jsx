export function Experience({ title, entries }) {
  return <section className="page experience reveal">
    <h1>{title}</h1>
    <ol className="timeline">{entries.map(entry => <li className="timeline-card" key={entry.organization}>
      <div><h2>{entry.title}</h2><p>{entry.organization}</p></div>
      <p className="period"><span>Período</span>{entry.period}</p>
    </li>)}</ol>
  </section>;
}
