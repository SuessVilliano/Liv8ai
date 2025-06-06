import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="hero-gradient pt-20 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated network background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary/80 rounded-full animate-pulse-slow [animation-delay:1s]"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-slow [animation-delay:2s]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Where Data Meets
            <span className="gradient-text block mt-2">Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up [animation-delay:0.2s]">
            Welcome to our AI-driven agency, where innovation meets precision, and we transform your data into actionable insights that drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:0.4s]">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-semibold"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-background px-8 py-4 text-lg font-semibold"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
