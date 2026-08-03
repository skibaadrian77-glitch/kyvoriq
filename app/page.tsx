import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Value from "@/components/sections/Value";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Value />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
