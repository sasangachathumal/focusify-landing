import Features from "@/components/features/features";
import Hero from "@/components/hero/hero";
import Showcase from "@/components/showcase/showcase";

export default function Home() {
  return (
    <div className="px-5">
    <Hero/>
    <Features/>
    <Showcase/>
    </div>
  );
}
