import { cn } from '@/lib/utils';

function Diagonals() {
  return (
    <svg viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="diagonal-stripes" fill="#6731a2">
          <polygon points="0 40 40 0 20 0 0 20" />
          <polygon points="40 40 40 20 20 40" />
        </g>
      </g>
    </svg>
  );
}

function DiagonalSquare({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={cn('grid grid-cols-2 grid-rows-2 w-24', className)}>
      <Diagonals />
      <Diagonals />
      <Diagonals />
      <Diagonals />
    </div>
  );
}

export { DiagonalSquare };
