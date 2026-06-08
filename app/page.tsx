import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[85vh] bg-white">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <CTA />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
