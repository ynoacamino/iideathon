import { cn } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import { Triangle, triangleVariants } from "./triangle";

type TrianglesProps = {
  rows?: number;
  cols?: number;
  className?: string;
} & VariantProps<typeof triangleVariants>;

function Triangles({
  rows = 1, cols = 1, size, className,
}: TrianglesProps) {
  return (
    <div
      className={cn(
        "grid gap-1 w-max",
        className,
      )}
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {
        Array.from({ length: rows * cols }).map((_, i) => (
          <Triangle
            key={`triangle-${i}-${Math.random()}`}
            className={triangleVariants({ size })}
            aria-label="Star"
          />
        ))
      }
    </div>
  );
}

export { Triangles };
