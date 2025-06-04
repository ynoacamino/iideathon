'use client';

import { cn } from '@/lib/utils';
import Wavify from 'react-wavify';

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
        className={cn('w-full flex justify-center items-center pb-28 pt-10 px-4 md:px-6', {
          'bg-background': background === 'background',
          'bg-primary text-background': background === 'primary',
        })}
        {...props}
      >
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
