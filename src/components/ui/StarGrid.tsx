import Star from '@/assets/star.svg';

interface StarGridProps {
  rows?: number;
  cols?: number;
}

function StarGrid({
  rows = 1, cols = 1,
}: StarGridProps) {
  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {
        Array.from({ length: rows * cols }).map((_, i) => (
          <Star
            key={`star-${i}-${Math.random()}`}
            className="w-6 h-6"
            aria-label="Star"
          />
        ))
      }
    </div>
  );
}

export { StarGrid };
