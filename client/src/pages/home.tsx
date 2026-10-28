import { Link } from "wouter";
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
        <section className="max-w-7xl mx-auto px-6 py-10" aria-label="Founder’s Launchpad">
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-950/20 p-8 flex flex-wrap items-center justify-between gap-6">
            <div><p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">LIV8 AI · Founder’s Launchpad</p><h2 className="text-2xl font-bold">Build your offer. Track your next milestone.</h2><p className="text-muted-foreground mt-2">Practical tutorials, a seven-day challenge, and a personal founder workspace.</p></div>
            <Link href="/launchpad" className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black">Explore the Launchpad →</Link>
          </div>
        </section>
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
