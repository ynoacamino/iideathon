import { cn } from '@/lib/utils';

export default function Subtitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2 className={cn('text-primary text-3xl md:text-4xl font-bold bg-secondary p-2 rounded-md max-w-xl uppercase', className)} {...props} />
  );
}
