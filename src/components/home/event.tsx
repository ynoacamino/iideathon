'use client';

import { motion } from 'motion/react';
import Section from '../ui/section';

const steps = [
  {
    number: 1,
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1749484420_megafono.png',
    label: 'Difusión y convocatoria',
  },
  {
    number: 2,
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1749484287_hands.png',
    label: 'Presentación de ideas y voluntarios',
  },
  {
    number: 3,
    image: 'https://ynoa-uploader.ynoacamino.site/uploads/1749484150_board.png',
    label: 'Desarrollo y presentación final',
  },
];

function Step({ number, image, label }: { number: number; image: string, label: string }) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <img
        src={image}
        alt={`Paso ${number}`}
        className="w-full max-w-52 md:max-w-md aspect-square object-contain rounded-lg "
      />
      <motion.span
        className="absolute -bottom-16 -left-16"
        initial={{ scale: 0.6, rotate: -30, opacity: 0.7 }}
        whileInView={{
          scale: [0.6, 1.4, 1],
          rotate: [-30, 15, 0],
          opacity: [0.7, 1],
        }}
        viewport={{ amount: 0.4, once: true }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <strong className="font-black text-yellow-400 stroke-9 stroke-primary text-[160px] outlined-text z-10">
          {number}
        </strong>
      </motion.span>
      <div className=" w-full text-center mt-6">
        <span className="text-2xl md:text-3xl font-bold text-background z-40">
          {label }
        </span>
      </div>
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
        Este Ideathon es tu oportunidad para transformar
        ideas en soluciones reales que impacten
        positivamente en la educación.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 my-10">
        {steps.map((step) => (
          <Step key={step.number} number={step.number} image={step.image} label={step.label} />
        ))}
      </div>
    </Section>
  );
}
