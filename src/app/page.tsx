import { StarGrid } from "@/components/ui/StarGrid";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
        <StarGrid size="lg" rows={4} cols={4} />
      </main>
    </div>
  );
}
