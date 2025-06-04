import { DynamicTimeUnit } from './timeunit';

interface TimeMeasureProps {
  value: number;
  label: string;
}

function TimeMeasure({
  value, label,
}: TimeMeasureProps) {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="flex gap-1">
        <DynamicTimeUnit value={Math.floor(value / 10)} label={`${label}-d`} />
        <DynamicTimeUnit value={value % 10} label={`${label}-u`} />
      </div>
      <span className="font-bold text-secondary ml-2 text-md sm:text-xl md:text-2xl">
        {label}
      </span>
    </div>
  );
}

export { TimeMeasure };
