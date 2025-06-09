import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import Link from 'next/link';
import Subtitle from '../ui/subtitle';

const DEFAULT_IMAGE = 'https://ynoa-uploader.ynoacamino.site/uploads/1749484690_medalla.png';

export default function SectionHome() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3 py-8">
      <div className="flex flex-col gap-4 items-start justify-center col-span-2">
        <Subtitle>
          RECONOCIMIENTOS
        </Subtitle>
        <ul className="text-2xl text-primary font-bold w-full max-w-xl">
          <li>
            - Certificados de participación para todos.
          </li>
          <li>
            - Premios especiales para las mejores propuestas.
          </li>
          <li>
            - Reconocimiento institucional por IEEE y ACM.
          </li>
          <li>
            - Registro audiovisual de tu participación.
          </li>
          <li>
            - ACM con estudiantes de otras carreras.
          </li>
        </ul>

        <Button
          asChild
          size="lg"
          className="text-2xl mt-4"
        >
          <Link
            href="https://ynoa-uploader.ynoacamino.site/uploads/1749484850_ideathon.pdf"
            target="_blank"
          >
            Inscribete
          </Link>
        </Button>
      </div>
      <div className="flex justify-center items-center w-full flex-col gap-4">
        <img
          src={DEFAULT_IMAGE}
          alt="Ideathon Default"
          className="w-52 md:w-72 h-auto aspect-square"
        />
      </div>
    </Section>
  );
}
