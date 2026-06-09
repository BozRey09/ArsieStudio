import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-white">
        <Hero />
        <Stats />
        <About />
        <Portfolio />
        <Services />
        <Testimonial />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
