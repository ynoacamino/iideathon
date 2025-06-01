import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Section from '@/components/ui/section';

const LOGO = 'https://ynoa-uploader.ynoacamino.site/uploads/1748798983_Component%201%20%2810%29%201%20%281%29.png';
const DEFAULT_IMAGE = 'https://ynoa-uploader.ynoacamino.site/uploads/1748797729_Logo_Principal_Transparente%203.png';

export default function Hero() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3 gap-y-10">
      <div className="col-span-1 md:col-span-2 w-full justify-center flex items-start flex-col gap-2">
        <h1>
          <img
            src={LOGO}
            alt="Ideathon Logo"
            className="w-full max-w-xl"
          />
          <span className="sr-only">
            Ideathon concurso de ideas para el desarrollo de software por IEEE UNSA
          </span>
        </h1>
        <p className="text-xl text-primary font-bold w-full max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text.
        </p>
      </div>
      <div className="flex justify-center items-center w-full flex-col gap-4">
        <img
          src={DEFAULT_IMAGE}
          alt="Ideathon Default"
          className="w-56 md:w-72 h-auto aspect-square"
        />
        <div className="flex gap-4 items-center justify-center">
          <IconBrandFacebook className="size-10 text-primary" />
          <IconBrandInstagram className="size-10 text-primary" />
          <IconBrandLinkedin className="size-10 text-primary" />
        </div>
      </div>
    </Section>
  );
}
