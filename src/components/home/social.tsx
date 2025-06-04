'use client';

import Section from '@/components/ui/section';
import Subtitle from '@/components/ui/subtitle';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { motion } from 'motion/react';

const socials_networks = [
  {
    name: 'Facebook',
    icon: IconBrandFacebook,
    url: 'https://www.facebook.com/',
  },
  {
    name: 'Instagram',
    icon: IconBrandInstagram,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'LinkedIn',
    icon: IconBrandLinkedin,
    url: 'https://www.linkedin.com/',
  },
];

export default function Social() {
  return (
    <Section className="flex flex-col justify-center items-center gap-10">
      <Subtitle className="w-full max-w-xl  text-center">
        Siguenos y estate atento a nuestras redes sociales
      </Subtitle>
      <div className="flex flex-col gap-4 items-center justify-center text-xl md:text-3xl text-primary font-bold">
        {socials_networks.map((network, i) => {
          const Icon = network.icon;
          return (
            <motion.a
              key={network.name}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary/80 transition-colors"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ amount: 0.4, once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Icon className="size-12 md:size-14" />
              {network.name}
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}
