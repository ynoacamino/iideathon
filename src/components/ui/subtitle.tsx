import { cn } from '@/lib/utils';

export default function Subtitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2 className={cn('text-primary text-4xl md:text-5xl font-bold bg-secondary px-3 py-2 rounded-lg w-full max-w-xl', className)} {...props} />
  );
}
