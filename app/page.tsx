import IntroLoader from "@/components/IntroLoader";
import CursorSpotlight from "@/components/CursorSpotlight";
import PageAnimations from "@/components/PageAnimations";

import Hero from "@/components/sections/Hero";
import Value from "@/components/sections/Value";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f5f5f5] selection:bg-[#6d5eff]/35 selection:text-white">
      <IntroLoader />
      <CursorSpotlight />
      <PageAnimations />

      <Hero />
      <Value />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}