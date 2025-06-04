'use client';

import Squiggle from '@/assets/squiggle.svg';
import { cn } from '@/lib/utils';
import Wavify from 'react-wavify';
import { DiagonalSquare } from './diagonalSquare';
import { Stars } from './stars';
import { Triangles } from './triangles';

export default function Section({
  className,
  children,
  background = 'background',
  ...props
}: React.ComponentProps<'section'> & { background?: 'background' |
'primary' }) {
  return (
    <>
      {
        background === 'primary' && (
          <Wavify
            fill="#360094"
            paused={false}
            options={{
              height: 15,
              amplitude: 30,
              speed: 0.15,
              points: 3,
            }}
          />
        )
      }
      <section
        className={cn('w-full flex justify-center items-center py-10 px-4 md:px-6 relative', {
          'bg-background': background === 'background',
          'bg-primary text-background': background === 'primary',
        })}
        {...props}
      >
        {
          background === 'primary' && (
            <>
              <Stars
                cols={3}
                className="absolute top-0 left-5 sm:left-20 md:left-36 animate-bounce"
              />
              <Triangles
                cols={2}
                className="absolute bottom-0 left-5 sm:left-20 md:left-36"
              />
              <DiagonalSquare
                className="absolute top-0 right-5 sm:right-20 md:right-36 size-16 sm:size-20 md:size-32"
              />
              <Squiggle className="absolute right-5 sm:right-24 md:right-38 top-10 sm:top-16 md:top-22 w-12 sm:w-18 md:w-24" />
              <Stars
                cols={3}
                className="absolute bottom-0 right-5 sm:right-20 md:right-36 animate-bounce"
              />
            </>
          )
        }
        <div className={cn('max-w-5xl w-full', className)}>
          {children}
        </div>
      </section>
      {
        background === 'primary' && (
        <Wavify
          fill="#360094"
          className="rotate-180"
          paused={false}
          options={{
            height: 15,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
        )
      }
    </>
  );
}
