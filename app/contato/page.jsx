import { Mail } from 'lucide-react';
import { siBehance, siGithub, siLinkedin } from 'simple-icons';
import { BrandIcon } from '../brand-icon';
import { social } from '../data';

export const metadata = { title: 'Contatos' };
const profiles = [['LinkedIn', siLinkedin], ['Behance', siBehance], ['GitHub', siGithub]];
const email = 'silas.freitaschagas@gmail.com';

export default function Contato() {
  return <section className="page contacts reveal">
    <h1>Contatos</h1>
    <ul className="profiles">{profiles.map(([name, icon]) => <li key={name}>
      <a className="profile" href={social[name]} target="_blank" rel="noopener noreferrer">
        <span className="profile-icon"><BrandIcon icon={icon} size={96} /></span>
        <span>{name}</span>
      </a>
    </li>)}</ul>
    <a className="email" href={'mailto:' + email}><Mail aria-hidden="true" /><span>{email}</span></a>
  </section>;
}
