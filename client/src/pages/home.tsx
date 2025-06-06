import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Methodology from "@/components/sections/methodology";
import Projects from "@/components/sections/projects";
import Testimonials from "@/components/sections/testimonials";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Careers from "@/components/sections/careers";

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
        <Testimonials />
        <Blog />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
