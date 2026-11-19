import { professional } from '../data';
import { Experience } from '../experience';

export const metadata = { title: 'Experiência Profissional' };
export default function Profissional() {
  return <Experience title={<>Experiência<br />Profissional</>} entries={professional} />;
}
