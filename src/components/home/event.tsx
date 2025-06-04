'use client';

import { motion } from 'motion/react';
import Section from '../ui/section';

const DEFAULT_IMAGE = 'https://ynoa-uploader.ynoacamino.site/uploads/1748797729_Logo_Principal_Transparente%203.png';

const steps = [
  {
    number: 1,
    image: DEFAULT_IMAGE,
  },
  {
    number: 2,
    image: DEFAULT_IMAGE,
  },
  {
    number: 3,
    image: DEFAULT_IMAGE,
  },
];

function Step({ number, image }: { number: number; image: string }) {
  return (
    <div className="relative">
      <img
        src={image}
        alt={`Paso ${number}`}
        className="w-full max-w-52 md:max-w-md bg-background"
      />
      <motion.span
        className="absolute -bottom-25 -left-13"
        initial={{ scale: 0.6, rotate: -30, opacity: 0.7 }}
        whileInView={{
          scale: [0.6, 1.4, 1],
          rotate: [-30, 15, 0],
          opacity: [0.7, 1],
        }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <strong className="font-black text-yellow-400 stroke-9 stroke-primary text-[160px] outlined-text">
          {number}
        </strong>
      </motion.span>
    </div>
  );
}

export default function Event() {
  return (
    <Section background="primary" className="flex flex-col pb-10 pt-4 gap-6 items-center">
      <h2 className="text-5xl md:text-6xl font-black text-center mb-10">
        CONOCE EL EVENTO
      </h2>
      <p className="text-center text-2xl md:text-3xl w-full max-w-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 my-10">
        {steps.map((step) => (
          <Step key={step.number} number={step.number} image={step.image} />
        ))}
      </div>
    </Section>
  );
}
