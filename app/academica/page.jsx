import { academia } from '../data';
import { Experience } from '../experience';

export const metadata = { title: 'Experiência Acadêmica' };
export default function Academica() {
  return <Experience title={<>Experiência<br />Acadêmica</>} entries={academia} />;
}
