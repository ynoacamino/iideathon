'use client';

import { useEffect, useState } from 'react';
import Section from '../../ui/section';
import { TimeMeasure } from './timemeasure';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Timer() {
  // Fecha objetivo: 15 de junio 2025 a las 23:59
  const targetDate = new Date(2025, 5, 15, 23, 59);

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0, hours: 0, minutes: 0, seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return null;
  }

  if (
    timeLeft.days === 0
    && timeLeft.hours === 0
    && timeLeft.minutes === 0
    && timeLeft.seconds === 0
  ) {
    return (
      <Section background="primary" className="py-4 md:py-12">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl font-bold text-secondary">
              ¡El evento ha comenzado!
            </h2>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section background="primary" className="py-4 md:py-12">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-semibold mb-4 sm:mb-8 text-center">
            Faltan
          </h2>

          <div className="w-full flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
            <TimeMeasure value={timeLeft.days} label="días" />
            <TimeMeasure value={timeLeft.hours} label="horas" />
            <TimeMeasure value={timeLeft.minutes} label="minutos" />
            <TimeMeasure value={timeLeft.seconds} label="segundos" />
          </div>

          <p className="text-2xl sm:text-4xl font-bold mt-8 sm:mt-16 text-center">
            ¡Pronto empezará lo genial!
          </p>
        </div>
      </div>
    </Section>
  );
}
