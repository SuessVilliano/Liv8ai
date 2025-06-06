import { Brain, Linkedin, Twitter, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-primary mr-2" />
              <span className="text-3xl font-bold">
                LIV8<span className="gradient-text">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed max-w-md">
              Join our AI community – Transforming Businesses with Intelligent Solutions. 
              Where data meets intelligence and innovation drives success.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Services", id: "services" },
                { label: "Projects", id: "projects" },
                { label: "Blog", id: "blog" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services & Legal</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("careers")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            &copy; 2025 LIV8AI. All Rights Reserved.{" "}
            <a
              href="https://www.liv8ai.com"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              www.liv8ai.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
