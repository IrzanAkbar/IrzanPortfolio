import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import DepthGauge from "@/components/DepthGauge";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DepthGauge />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
