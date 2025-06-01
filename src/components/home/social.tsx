import Section from '@/components/ui/section';
import Subtitle from '@/components/ui/subtitle';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

export default function Social() {
  return (
    <Section className="flex flex-col justify-center items-center gap-10">
      <Subtitle className="w-full max-w-xl  text-center">
        Siguenos y estate atento a nuestras redes sociales
      </Subtitle>
      <div className="flex flex-col gap-4 items-center justify-center text-xl md:text-3xl text-primary font-bold">
        <div className="flex gap-2 items-center">
          <IconBrandFacebook className="size-12 md:size-16 text-primary" />
          <span>
            Facebook
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <IconBrandInstagram className="size-12 md:size-16 text-primary" />
          <span>
            Instagram
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <IconBrandLinkedin className="size-12 md:size-16 text-primary" />
          <span>
            Linkedin
          </span>
        </div>
      </div>
    </Section>
  );
}
