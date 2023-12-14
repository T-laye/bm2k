import About from "@/components/sections/About";
import Backed from "@/components/sections/Backed";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Road from "@/components/sections/Road";
import Unique from "@/components/sections/Unique";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />

      <Backed />

      <About />

      <Road />

      <Unique />

      <Faq />
    </main>
  );
}
