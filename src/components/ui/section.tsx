import { cn } from '@/lib/utils';

export default function Section({
  className,
  children,
  background = 'background',
  ...props
}: React.ComponentProps<'section'> & { background?: 'background' |
'primary' }) {
  return (
    <section
      className={cn('w-full flex justify-center items-center py-20 px-4 md:px-6', {
        'bg-background': background === 'background',
        'bg-primary text-background': background === 'primary',
      })}
      {...props}
    >
      <div className={cn('max-w-5xl w-full', className)}>
        {children}
      </div>
    </section>
  );
}
