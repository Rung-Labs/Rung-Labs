import { Hero } from "@/components/hero";

export default function Home({ setHovering }: { setHovering: (hovering: boolean) => void }) {
  return (
    <main className="h-[calc(100svh-6rem)] overflow-hidden max-md:min-h-[calc(100svh-6rem)] max-md:h-auto">
      <Hero setHovering={setHovering} />
    </main>
  );
}

