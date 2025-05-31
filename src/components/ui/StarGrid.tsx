import Star from '@/assets/star.svg';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

interface StarGridProps {
  rows?: number;
  cols?: number;
  className?: string;
}

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
    }
  }
);

function StarGrid({
  rows = 1, cols = 1, size, className,
}: StarGridProps & VariantProps<typeof starVariants>) {
  return (
    <div
      className={cn(
        "grid gap-2 w-max",
        className,
      )}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {
        Array.from({ length: rows * cols }).map((_, i) => (
          <Star
            key={`star-${i}-${Math.random()}`}
            className={starVariants({ size })}
            aria-label="Star"
          />
        ))
      }
    </div>
  );
}

export { StarGrid };
