import Event from '@/components/home/event';
import Hero from '@/components/home/hero';
import SectionHome from '@/components/home/sectionhome';
import Social from '@/components/home/social';
import Timer from '@/components/home/timer';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Timer />
      <SectionHome />
      <Event />
      <Social />
    </main>
  );
}
