import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function LandingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookCall = () => {
    window.open('https://sqr.co/LIV8DigitalCallForm/', '_blank');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg"
          : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="relative cursor-pointer">
                {/* Circular logo inspired by your original design */}
                <div className="w-12 h-12 relative mr-3">
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin [animation-duration:8s]"></div>
                  <div className="absolute inset-1 rounded-full border border-cyan-300 animate-spin [animation-duration:6s] [animation-direction:reverse]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-lg">8</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/">
              <div className="font-bold text-2xl cursor-pointer">
                LIV<span className="gradient-text">8AI</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <span className="nav-link text-foreground hover:text-primary font-medium px-3 py-2 cursor-pointer">
                  Home
                </span>
              </Link>
              <Button
                onClick={handleBookCall}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Book Strategy Call
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button
              onClick={handleBookCall}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Book Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}