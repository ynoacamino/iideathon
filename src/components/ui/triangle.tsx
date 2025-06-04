import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

export const triangleVariants = cva(
  '',
  {
    variants: {
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-14',
        responsive: 'size-8 md:size-10 lg:size-12 xl:size-14',
      },
    },
    defaultVariants: {
      size: 'responsive',
    },
  },
);

function Triangle({
  className, size, ...props
}: HTMLAttributes<SVGElement> & VariantProps<typeof triangleVariants>) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        triangleVariants({ size }),
        className,
      )}
      {...props}
    >
      <polygon points="100,100 0,100 100,0" fill="#6731a2" />
    </svg>
  );
}

export { Triangle };
