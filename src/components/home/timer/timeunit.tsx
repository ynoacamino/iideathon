import { AnimatePresence, motion } from 'motion/react';

function DynamicTimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-secondary px-2 py-1 sm:px-3 sm:py-2 rounded-sm grid">
      <AnimatePresence>
        <motion.span
          key={`${label}-${value}`}
          initial={{ opacity: 0.8, y: 40, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0.8, y: -40, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="font-bold text-primary text-3xl sm:text-4xl md:text-5xl col-end-1 row-end-1 overflow-hidden"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export { DynamicTimeUnit };
