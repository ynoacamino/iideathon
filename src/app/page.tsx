import Event from '@/components/home/event';
import Hero from '@/components/home/hero';
import SectionHome from '@/components/home/sectionhome';
import Social from '@/components/home/social';
import Timer from '@/components/home/timer';
// import { Triangles } from '@/components/ui/triangles';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      {/* <Triangles rows={3} cols={3} size="md" /> */}
      <Timer />
      <SectionHome />
      <Event />
      <Social />
    </main>
  );
}
