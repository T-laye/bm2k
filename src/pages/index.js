import Backed from "@/components/sections/Backed";
import Hero from "@/components/sections/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />

      <Backed />
    </main>
  );
}
