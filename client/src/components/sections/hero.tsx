import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, Users } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-gradient pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full pulse-glow animate-bounce [animation-delay:0s]"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan-300 rounded-full pulse-glow animate-bounce [animation-delay:1s]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-cyan-500 rounded-full pulse-glow animate-bounce [animation-delay:2s]"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-cyan-200 rounded-full pulse-glow animate-bounce [animation-delay:0.5s]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Where data meets
            <span className="gradient-text block">intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up [animation-delay:0.2s] leading-relaxed">
            We build in minutes what others drag out for months. From consultation to creation—your vision becomes reality faster than you thought possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.4s]">
            <Link href="/book-a-call">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold pulse-glow border border-cyan-400"
              >
                Book Strategy Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/affiliate">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-background px-8 py-4 text-lg font-semibold"
              >
                Join Affiliate Program
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Additional Navigation */}
          <div className="flex justify-center mt-6 animate-fade-in-up [animation-delay:0.6s]">
            <Link href="/built-in-minutes">
              <span className="text-cyan-400 hover:text-cyan-300 underline text-lg font-medium cursor-pointer">
                See How We Build Apps in Minutes →
              </span>
            </Link>
          </div>
        </div>

        {/* AI Demo Video */}
        <div className="relative animate-fade-in-up [animation-delay:0.6s]">
          <div className="relative bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/30">
              <iframe
                src="https://www.youtube.com/embed/4fqOCqEk6u4?si=vHXlodH1KE3d-c1K"
                title="LIV8AI - AI Solutions Demo"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Glowing effect around video */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl animate-pulse -z-10"></div>
            
            {/* Floating data points */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full pulse-glow animate-pulse [animation-delay:1s]"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full pulse-glow animate-pulse [animation-delay:2s]"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-300 rounded-full pulse-glow animate-pulse [animation-delay:0.5s]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
