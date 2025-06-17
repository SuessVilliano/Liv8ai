import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
    { label: "Careers", id: "careers" },
  ];

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
            <div className="relative">
              {/* Circular logo inspired by your original design */}
              <div className="w-12 h-12 relative mr-3">
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-spin [animation-duration:8s]"></div>
                <div className="absolute inset-1 rounded-full border border-cyan-300 animate-spin [animation-duration:6s] [animation-direction:reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-cyan-400 font-bold text-lg">8</span>
                </div>
              </div>
            </div>
            <div className="font-bold text-2xl">
              LIV<span className="gradient-text">8AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="nav-link text-foreground hover:text-primary font-medium px-3 py-2"
                >
                  {link.label}
                </button>
              ))}
              <Link href="/built-in-minutes">
                <span className="nav-link text-foreground hover:text-primary font-medium px-3 py-2 cursor-pointer">
                  Built in Minutes
                </span>
              </Link>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="sm"
                className="p-2"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                onClick={() => window.open('https://sqr.co/LIV8DigitalCallForm/', '_blank')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-primary"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="text-left text-foreground hover:text-primary font-medium py-2"
                    >
                      {link.label}
                    </button>
                  ))}
                  <Link href="/built-in-minutes">
                    <span className="text-left text-foreground hover:text-primary font-medium py-2 cursor-pointer block">
                      Built in Minutes
                    </span>
                  </Link>
                  <Button
                    onClick={toggleTheme}
                    variant="ghost"
                    className="justify-start py-2"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </Button>
                  <Button
                    onClick={() => window.open('https://sqr.co/LIV8DigitalCallForm/', '_blank')}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                  >
                    Let's Talk
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
