import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Methodology from "@/components/sections/methodology";
import Projects from "@/components/sections/projects";
import AffiliateCTA from "@/components/sections/affiliate-cta";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Methodology />
        <Projects />
        <AffiliateCTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
