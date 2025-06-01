import Section from '../ui/section';

function dinamicTime(time: number) {
  return (
    <span className="bg-secondary text-primary px-1 py-2 rounded-sm mr-2">
      {time < 10 ? `0${time}` : time}
    </span>
  );
}

export default function Timer() {
  const days = 4;
  const hours = 15;
  const minutes = 10;

  return (
    <Section background="primary" className="py-4 md:py-12">
      <div className="flex flex-col gap-4 items-center justify-center">
        <span className="text-xl md:text-3xl font-semibold mb-6">
          Faltan
        </span>
        <span className="text-secondary font-bold text-6 text-5xl md:text-6xl flex flex-col md:flex-row items-center justify-center gap-8">
          <span>
            {dinamicTime(days)}
            días
          </span>
          {' '}
          <span>
            {dinamicTime(hours)}
            horas
          </span>
          {' '}
          <span>
            {dinamicTime(minutes)}
            minutos
          </span>
        </span>
        <span className="text-xl md:text-3xl font-bold mt-20 text-center">
          ¡Pronto empezará lo genial!
        </span>
      </div>
    </Section>
  );
}
