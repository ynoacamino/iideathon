'use client';

import Section from '@/components/ui/section';
import { DEFAULT_IMAGE, LOGO } from '@/lib/images';
import { SOCIALS_NETWORKS } from '@/lib/social';

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mb-20">
      <div className="col-span-1 md:col-span-2 w-full justify-center flex items-start flex-col gap-2">
        <h1>
          <img
            src={LOGO}
            alt="Ideathon Logo"
            className="w-full max-w-xl aspect-[21/9] object-contain"
          />
          <span className="sr-only">
            Ideathon concurso de ideas para el desarrollo de software por IEEE UNSA
          </span>
        </h1>
        <p className="text-3xl text-primary font-bold w-full max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text.
        </p>
      </div>
      <div className="flex justify-center items-center w-full flex-col gap-4">
        <img
          src={DEFAULT_IMAGE}
          alt="Ideathon Default"
          className="w-56 md:w-72 h-auto aspect-square "
        />
        <div className="flex gap-4 items-center justify-center">
          {SOCIALS_NETWORKS.map((network, i) => {
            const Icon = network.icon;
            return (
              <motion.a
                key={network.name}
                className="flex items-center gap-2 hover:text-primary/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                href={network.url}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1, duration: 0.6 }}
              >
                <Icon className="size-10 text-primary hover:text-primary/80" />
                <span className="sr-only md:inline">{network.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
