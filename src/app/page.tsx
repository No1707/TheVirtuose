import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Process from "@/components/Process";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <main id="main">
        <Hero />
        <Manifesto />
        <Services />
        <SelectedWork />
        <Marquee />
        <About />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
