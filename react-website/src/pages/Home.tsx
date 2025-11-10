import { Hero } from "@/components/hero";

export default function Home({ setHovering }: { setHovering: (hovering: boolean) => void }) {
  return (
    <main className="min-h-svh">
      <Hero setHovering={setHovering} />
    </main>
  );
}

