import Star from '@/assets/star.svg';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const starVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'size-4',
        md: 'size-6',
        lg: 'size-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

type StarGridProps = {
  rows?: number;
  cols?: number;
  className?: string;
} & VariantProps<typeof starVariants>;

function Stars({
  rows = 1, cols = 1, size, className,
}: StarGridProps) {
  return (
    <div
      className={cn(
        'grid gap-1 w-max',
        className,
      )}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {
        Array.from({ length: rows * cols }).map(() => (
          <Star
            key={crypto.randomUUID()}
            // TODO: It is better creating a context that keeps stars amount on the page
            className={starVariants({ size })}
            aria-label="Star"
          />
        ))
      }
    </div>
  );
}

export { Stars };
