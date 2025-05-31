import { Triangles } from "@/components/ui/triangles";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col">
      <Triangles rows={3} cols={3} size="md"/>
      </main>
    </div>
  );
}
