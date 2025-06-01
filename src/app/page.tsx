import Hero from '@/components/ui/home/hero';
import { Triangles } from '@/components/ui/triangles';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Triangles rows={3} cols={3} size="md" />
    </main>
  );
}
