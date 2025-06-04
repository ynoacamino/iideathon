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
        className={cn('w-full flex justify-center items-center pb-28 pt-10 px-4 md:px-6 relative', {
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
                className="absolute top-0 left-10 md:left-14 animate-bounce"
              />
              <Triangles
                cols={2}
                className="absolute bottom-5 -translate-y-full left-10 md:left-14"
              />
              <DiagonalSquare
                className="absolute top-0 right-10 md:right-14 size-20 md:size-32"
              />
              <Squiggle className="absolute right-12 md:right-16 top-16 md:top-22 w-18 md:w-24" />
              <Stars
                cols={3}
                className="absolute bottom-5 -translate-y-full right-10 md:right-14 animate-bounce"
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
          fill="#ffffff"
          style={{ backgroundColor: '#360094' }}
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
