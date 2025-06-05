import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import Subtitle from '../ui/subtitle';

const DEFAULT_IMAGE = 'https://ynoa-uploader.ynoacamino.site/uploads/1748797729_Logo_Principal_Transparente%203.png';

export default function SectionHome() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3 py-8">
      <div className="flex flex-col gap-4 items-start justify-center col-span-2">
        <Subtitle>
          As a veterinarian and lover of animal
        </Subtitle>
        <p className="text-2xl text-primary font-bold w-full max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text.
        </p>
        <Button
          size="lg"
          className="text-2xl py-3 font-bold mt-4"
        >
          Inscribete
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
